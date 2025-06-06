# Three.js AMD Example

This project demonstrates how to use Three.js with AMD modules, bundled using Rollup, and loaded in the browser with RequireJS.

## Features
- Three.js scene with a rotating cube
- OrbitControls for camera interaction
- Modern Rollup build setup (AMD output)
- Local RequireJS for module loading

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)

### Install dependencies
```
npm install
```

### Build the project
```
npm run build
```
This will generate `dist/three-app.amd.js`.

### Start a local server
```
npm start
```
This uses `http-server` to serve the project locally. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Project Structure
```
├── index.html            # Loads RequireJS and the AMD bundle
├── package.json          # Project metadata and scripts
├── rollup.config.js      # Rollup configuration for AMD output
├── src/
│   └── main.js           # Three.js scene setup
└── dist/
    └── three-app.amd.js  # AMD bundle (generated)
```

## Notes
- The 3D scene renders into the `<div id="three-container">` in `index.html`.
- `THREE` is exposed globally for debugging in the browser console after the module loads.
- If you see a 404 for `favicon.ico`, it is harmless and can be ignored or you can add a favicon.

## License
MIT
