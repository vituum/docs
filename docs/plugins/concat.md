# Concat
_[@vituum/vite-plugin-concat](https://github.com/vituum/vite-plugin-concat)_

Vite plugin for concatenating files together, handy especially for old projects that used gulp-concat or grunt-concat for concatenating `.js` files together.

Automatically concatenates all `import './paths'` together into single file, additionally you can provide glob of files which should be also concated into single file via `files` option.

## Install
**npm**
```bash
npm i @vituum/vite-plugin-concat --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-concat -D
```

## Config
```javascript
import concat from '@vituum/vite-plugin-concat'

export default {
    plugins: [concat({
        input: ['main.js']
    })]
}
```

## Options

### input
- **Type:** `string[]`
- **Default:** `[]`

Determinates which input files should be processed by concat plugin.

### files
- **Type:** `{[key: string]: string[]}`
- **Default:** `{}`

Additional files that should be concated together inside input file, eg. `{ 'main.js': ['src/scripts/**'] }`

