'use strict';

const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

const { startServer, stopServer, getServerToken } = require('../server');

function request(port, path, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.get({ host: '127.0.0.1', port, path, headers }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });
    req.on('error', reject);
  });
}

test('startServer resolves the real bound port (regression)', async () => {
  const port = await startServer(0);
  try {
    assert.ok(Number.isInteger(port) && port > 0, `expected a real port, got ${port}`);
    assert.ok(port <= 65535);
  } finally {
    await stopServer();
  }
});

test('server responds and rejects untrusted routes', async () => {
  const port = await startServer(0);
  try {
    const missing = await request(port, '/');
    assert.strictEqual(missing.statusCode, 404);

    const guarded = await request(port, '/api/tools-status');
    assert.strictEqual(guarded.statusCode, 403, 'token-protected route must reject requests without a token');

    const authorized = await request(port, '/api/tools-status', { 'x-riff-token': getServerToken() });
    assert.strictEqual(authorized.statusCode, 200);
    assert.doesNotThrow(() => JSON.parse(authorized.body));
  } finally {
    await stopServer();
  }
});

test('requests with a foreign Origin are rejected', async () => {
  const port = await startServer(0);
  try {
    const res = await request(port, '/', { origin: 'https://evil.example.com' });
    assert.strictEqual(res.statusCode, 403);
  } finally {
    await stopServer();
  }
});
