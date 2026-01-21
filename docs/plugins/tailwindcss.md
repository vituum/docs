# TailwindCSS
_[@vituum/vite-plugin-tailwindcss](https://www.npmjs.com/package/@vituum/vite-plugin-tailwindcss)_

Adds out-of-the-box support for the old **TailwindCSS v3** to your project. Including base **PostCSS** plugins from [@vituum/vite-plugin-postcss](/plugins/postcss)

See [docs](https://v3.tailwindcss.com/docs) for more info about **TailwindCSS**

> Use the official [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) if you want to use latest **TailwindCSS** version

## Install
**npm**
```bash
npm i @vituum/vite-plugin-tailwindcss --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-tailwindcss -D
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
