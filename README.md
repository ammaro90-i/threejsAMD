# Three.js AMD Example

This project demonstrates how to use Three.js with AMD modules, bundled using Rollup (via Grunt), and loaded in the browser with RequireJS.

## Features
- Three.js scene with a rotating cube
- OrbitControls for camera interaction
- Rollup build setup (AMD output) managed by Grunt
- Local RequireJS for module loading
- Live reload and local server via Grunt

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)

### Install dependencies
```sh
npm install
```

### Build the project
```sh
grunt rollup
```
This will generate `dist/three-app.amd.js`.

### Start a local server with live reload
```sh
npm start
```
This uses Grunt to build, serve, and watch your project. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure
```
├── Gruntfile.js          # Grunt tasks for build/watch/server
├── index.html            # Loads RequireJS and the AMD bundle
├── package.json          # Project metadata and scripts
├── src/
│   └── main.js           # Three.js scene setup
└── dist/
    └── three-app.amd.js  # AMD bundle (generated)
```

## Notes
- The 3D scene renders into the `<div id="three-container">` in `index.html`.
- `THREE` is exposed globally for debugging in the browser console after the module loads.
- If you see a 404 for `favicon.ico`, it is harmless and can be ignored or you can add a favicon.
- All Rollup configuration is now in `Gruntfile.js` (no separate rollup.config.js).
- Minification is not used by default; if you want to add it, see the Gruntfile for plugin instructions.

## License
MIT
