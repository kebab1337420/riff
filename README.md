<p align="center">
  <img src="banner.png" alt="Riff Banner" width="100%">
</p>

<h1 align="center">Riff</h1>
<p align="center">
  <a href="https://github.com/rootscripts/riff/commits/main">
    <img src="https://img.shields.io/github/last-commit/rootscripts/riff?style=for-the-badge&labelColor=16191C&color=94C9FF" alt="Last Commit">
  </a>
  <a href="https://github.com/rootscripts/riff/stargazers">
    <img src="https://img.shields.io/github/stars/rootscripts/riff?style=for-the-badge&labelColor=16191C&color=CAD3F5" alt="Stars">
  </a>
  <a href="https://github.com/rootscripts/riff">
    <img src="https://img.shields.io/github/repo-size/rootscripts/riff?style=for-the-badge&labelColor=16191C&color=D0B4EB" alt="Repo Size">
  </a>
  <a href="https://github.com/rootscripts/riff/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/rootscripts/riff?style=for-the-badge&labelColor=16191C&color=8EEDD8" alt="License">
  </a>
  <a href="https://ko-fi.com/rootlesszen">
    <img src="https://img.shields.io/badge/Ko--fi-rootlesszen?style=for-the-badge&logo=kofi&logoColor=white&labelColor=16191C&color=FF5E5B" alt="Support on Ko-fi">
  </a>
</p>

<p align="center">
  <b>Riff</b> is a free forever, best and freshly updating desktop music player for Windows, Linux, and macOS. It is made for playing music, managing a music library, and downloading tracks for offline listening.
</p>

## Features

### Music downloads

Riff can download audio from:

* YouTube
* YT Music
* SoundCloud

Downloaded tracks can be added to the local library and played without an internet connection

# Android & iOS
Android & iOS Riff forks are unofficial and are not made by rootless.
All Riff Android & iOS FORKS:
### Muriel
https://github.com/cloverscripts/riff-muriel/tags
Muriel (Riff Android & iOS & Windows) by cloverscripts
### Other phone apps coming soon

# macOS warning

macOS support is still in beta and some functions may not work.

! When you install the .dmg, you'll get this error:

<p align="left">
  <img src="readmeerror.png" alt="macos" width="30%">
</p>

To fix it, write this command in the terminal

`xattr -d -r com.apple.quarantine /Applications/Riff.dmg`

(replace Riff.dmg with actual dmg name)

Then run the app again.

### Local music library

Your music files stay on your computer.

Riff can read track information such as:

* Title
* Artist
* Album
* Track number
* Album art
* Other common audio tags

You can also organize music into folders and playlists.

### Audio editor

Riff has a small built-in editor for making simple changes to a track.

You can:

* Speed up/slow down tracks realtime
* Add reverb, distortion, make the track sound high quality by equalizing
* Trim the beginning or end of a track
* Select a part of a song
* Save a selected section as a separate file

It is meant for quick edits, so you do not need to open another program for small changes.

### Lyrics

Lyrics are enabled with online search by default.

Riff supports:

* Plain text lyrics
* LRC files
* Manual lyric timing
* Online auto lyric timing

LRC files can be used when you already have timestamps. You can also adjust the timing yourself from inside the player.

### Discord Rich Presence

Riff can show what you are listening to on Discord.

The Rich Presence can include:

* Track name
* Artist
* track progress

### Playlists

You can create and manage playlists from your local music library.

Tracks can be added or removed without changing the original files.

### Background playback

Music continues playing while Riff is in the background or minimized.

### Offline use

Riff does not require an account to play local music.

Your local library, playlists, downloaded files, and other music data can stay on your computer.

Riff does not need a subscription or paid Premium.

## Memory usage

Riff is designed to stay relatively light, comfortable and fast for a desktop music player.

On a typical system, it uses around **~200 MB of RAM**, although actual usage depends on the number of tracks loaded, the current features being used, and the system itself.

## Requirements

* Node.js 18 or newer
* npm
* yt-dlp, ffmpeg

! ALL OF THESE ARE INSTALLED BY DEFAULT AND COMPILED IN RELEASES !

## Getting started

Clone the repository:

```bash
git clone https://github.com/rootscripts/riff.git
cd riff
```

Install the dependencies:

```bash
npm install
```

Start the development version:

```bash
npm start
```

## Building

To create a production build, use:

```bash
npm run dist
```

The exact build output depends on the current project configuration.

## macOS

Support for macOS is experimental (built in CI, not tested on every Mac).

### Download

* `Riff-<version>-mac-arm64.dmg` for Apple Silicon (M1 and newer)
* `Riff-<version>-mac-x64.dmg` for Intel

Open the dmg, drag Riff to Applications.

### First launch

The app is not signed. Right-click Riff in Applications, choose Open, and confirm. If macOS says the app is "damaged": run `xattr -cr /Applications/Riff.app` in Terminal and open it again.

### Tools

Run `brew install yt-dlp ffmpeg` (Riff finds Homebrew installs automatically).

### Notes

* No automatic updates on macOS (download the new dmg from Releases).
* Data is stored in `~/Library/Application Support/Riff`.

### Build from source

```bash
npm install
npm run dist
```
### Contribution

Please run tests for your PR if it works first, if it looks good, and search any bugs possible.

If it contains bugs/several critical issues/crashes and not tested, please do not post a PR as it's useless

## Notes

Developed for educational and personal media management purposes only. Users are responsible for complying with local copyright laws and the terms of service of any third-party streaming platforms.

Riff is primarily intended for personal use with music you are allowed to download and store.

When downloading content from third-party services, make sure your use of that content follows the service's rules and the laws that apply to you.

## License
MIT
