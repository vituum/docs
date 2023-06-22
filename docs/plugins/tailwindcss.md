# TailwindCSS
_[@vituum/vite-plugin-tailwind](https://www.npmjs.com/package/@vituum/vite-plugin-tailwind)_

Adds out of the box support for **TailwindCSS** to your project. Including base **PostCSS** plugins from [@vituum/vite-plugin-postcss](/plugins/postcss)

See [docs](https://tailwindcss.com/docs) for more info about **TailwindCSS**

## Install
**npm**
```bash
npm i @vituum/vite-plugin-tailwind --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-tailwind -D
```

## Config
```javascript
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

export default {
    plugins: [tailwindcss()]
}
```

## Options

### tailwindcss

- **Type:** `Object`
- **Default:** `{}`

TailwindCSS [configuration](https://tailwindcss.com/docs/configuration#configuration-options) options. Can be used instead of `tailwind.config.js`.

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
