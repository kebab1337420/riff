<p align="center">
  <img src="banner.png" alt="Riff - free desktop music player for YouTube Music and SoundCloud" width="100%">
</p>

<h1 align="center">Riff</h1>

<p align="center"><b>A free, opensource desktop music player for YouTube Music and SoundCloud. No ads, no account and no telemetry </b></p>

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
  <a href="https://github.com/rootscripts/riff/releases"><b>Download</b></a> ·
  <a href="#features">Features</a> ·
  <a href="#faq">FAQ</a> ·
  <a href="#build-from-source">Build from source</a>
</p>

## What is Riff?

Riff is a desktop music player for **Windows, Linux and macOS**. 
It plays music from **YouTube Music**, **YouTube**, and **SoundCloud** without ads and without a Premium subscription, and it also works as a regular player for your local files (FLAC included).

You don't need to log in or create an account, and Riff doesn't collect telemetry. Install it and press play.

It's built with Electron and Material 3 Expressive UI.

## Features

- No ads streaming for YouTube Music, YouTube and SoundCloud
- Plays local audio (FLAC, MP3, WAV, OGG and more)
- Easy audio controls with a built-in equalizer, speed changer, tempo and pitch & distortion & reverb sliders
- Spotify, YT, YT Music, Apple Music, SoundCloud public playlist import in 1 click
- UI customization with dynamic colors, profile banners, and a custom CSS editor for own themes
- Discord Rich Presence integration
- No telemetry and completely open source under MIT license

### Streaming
- Play YouTube Music, YouTube and SoundCloud with no ads
- Very fast track loading

### Audio controls
- Quick presets and a 10-band equalizer
- Change tempo (speed up or slow down) in real time
- Add reverb or distortion
- Local FLAC support

### Downloads
Riff can download audio from YouTube, YT Music and SoundCloud. Downloaded tracks go into your local library and play without an internet connection.

### Local music library
Your files stay on your computer. Riff reads title, artist, album, track number, album art and other common tags. You can organize music into folders and playlists, and adding or removing tracks from a playlist never touches the original files.

### Audio editor
A small built-in editor for quick fixes, so you don't have to open another program:
- Trim the start or end of a track
- Select part of a song and save it as a separate file
- Change speed, add reverb or distortion, and equalize

### Lyrics
Online lyric search is on by default. Riff supports plain text lyrics, LRC files, manual timing, and automatic online timing. If you already have timestamps, use an LRC file. If not, adjust the timing yourself from inside the player.

### Discord Rich Presence
Show what you're listening to on Discord: track name, artist and progress.

### Customization
Dynamic Material 3 colors, custom banners and a built-in CSS editor.

### Background playback
Music keeps playing when Riff is minimized or in the background.

## Download and install

Grab the latest build from the [Releases page](https://github.com/rootscripts/riff/releases).

Releases already include everything Riff needs (yt-dlp and ffmpeg are bundled), so there's nothing extra to install on Windows or Linux.

### macOS

macOS support is **experimental**. It's built in CI and not tested on every Mac, so some things may not work.

1. Download the right file:
   - `Riff-<version>-mac-arm64.dmg` for Apple Silicon (M1 and newer)
   - `Riff-<version>-mac-x64.dmg` for Intel
2. Open the dmg and drag Riff into Applications.
3. The app isn't signed. Right-click Riff in Applications, choose **Open**, and confirm.
4. If macOS says the app is "damaged", run this in Terminal and open the app again:
   ```bash
   xattr -cr /Applications/Riff.app
   ```
   If you get a quarantine error when opening the dmg itself, run this instead (use your real dmg name):
   ```bash
   xattr -d -r com.apple.quarantine /path/to/Riff.dmg
   ```
5. Install the tools with Homebrew (Riff finds Homebrew installs automatically):
   ```bash
   brew install yt-dlp ffmpeg
   ```

Notes for macOS: there are no automatic updates (download the new dmg from Releases), and your data lives in `~/Library/Application Support/Riff`.

## Build from source

You need Node.js 18 or newer and npm. yt-dlp and ffmpeg are installed by default in dev and compiled into releases.

```bash
git clone https://github.com/rootscripts/riff.git
cd riff
npm install
npm start        # run the dev version
npm run dist     # make a production build
```

The exact build output depends on the current project configuration.

## Memory usage

Riff (1 electron proccess) uses roughly **180 MB of RAM** on a typical system. Real usage depends on how many tracks are loaded, which features you're using, and your machine. 
### We only treat RAM leak as a bug when it gets really high (600+ MB).

## Mobile versions

There is no official Riff for Android or iOS. The forks below are unofficial and not made by rootless.
### https://rootless.shit.vc/fork
More phone apps may come later.

## FAQ

**Is Riff free?**
Yes. Riff is free and open source under the MIT license. There's no subscription or Premium tier.

**Does Riff have ads?**
No. YouTube Music and SoundCloud playback is ad-free.

**Do I need an account to use Riff?**
No. No login, no account, no telemetry.

**Which platforms does Riff support?**
Windows, Linux and macOS. macOS is in beta.

**Can Riff play local files?**
Yes, including FLAC. It reads tags and album art, and you can build playlists without modifying the original files.

**Can I use Riff offline?**
Yes. Downloaded tracks and your local library play without internet.

**Can I import my Spotify playlists?**
Public Spotify playlists, yes, including ones with more than 100 tracks.

**Does Riff support synced lyrics?**
Yes: plain text, LRC files, manual timing and automatic online timing.

**Does Riff work with Discord?**
Yes. Rich Presence shows the track, artist and progress.

**Is there a Riff app for Android or iOS?**
Not an official one. See [Mobile versions](#mobile-versions) for community forks.

## Contributing

Pull requests are welcome. Please run the app and test your changes first, and look for bugs before you open the PR. A PR with untested code, crashes or critical issues just costs everyone time, so please don't post one in that state.

## Support

If Riff is useful to you, you can support development on [Ko-fi](https://ko-fi.com/rootlesszen). Starring the repo helps too.

## Disclaimer

Riff is made for educational and personal media management. It's meant for music you're allowed to download and store. When you download from third-party services, you're responsible for following their terms of service and the laws that apply to you.

## License

[MIT](LICENSE)

---

<sub>Keywords: free music player, YouTube Music desktop app, SoundCloud desktop player, ad-free music player, YouTube Music client for Windows Linux macOS, open source music player, Spotify playlist import, music player with equalizer, FLAC player, Discord Rich Presence music player, Electron music player.</sub>
