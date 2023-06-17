# PostCSS
_[@vituum/vite-plugin-postcss](https://www.npmjs.com/package/@vituum/vite-plugin-postcss)_

Adds more base **PostCSS** plugins to Vite.<br>
Includes `postcss-import`, `postcss-nesting`, `postcss-custom-media`, `autoprefixer`

Add more via Vite or PostCSS config. See [Vite docs](https://vitejs.dev/guide/features.html#postcss) for more info.

## Install
**npm**
```bash
npm i @vituum/vite-plugin-postcss --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-postcss -D
```

## Config
```javascript
import postcss from '@vituum/vite-plugin-postcss'

export default {
    plugins: [postcss()]
}
```

## Options
