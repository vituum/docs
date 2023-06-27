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

### import

- **Type:** `Object`
- **Default:** `{}`

PostCSS [postcss-import](https://www.npmjs.com/package/postcss-import plugin options.

### nesting

- **Type:** `Object`
- **Default:** `{}`

PostCSS [postcss-nesting](https://www.npmjs.com/package/postcss-nesting) plugin options.

### customMedia

- **Type:** `Object`
- **Default:** `{}`

PostCSS [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media) plugin options.

### autoprefixer

- **Type:** `Object`
- **Default:** `{}`

PostCSS [autoprefixer](https://www.npmjs.com/package/autoprefixer) plugin options.
