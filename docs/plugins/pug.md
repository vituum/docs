# Pug
_[@vituum/vite-plugin-pug](https://github.com/vituum/vite-plugin-pug)_

```pug
ul(id='navigation')
  each item in ['Home', 'About']
    li= item
```

See [docs](https://pugjs.org) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-pug --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-pug -D
```

## Config
```javascript
import pug from '@vituum/vite-plugin-pug'

export default defineConfig({
    plugins: [pug()]
})
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `pug` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see Pug [docs](https://pugjs.org/language/filters.html#custom-filters) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: config.templates.format === 'pug' ? /.(json|json.html|pug.json|pug.json.html|pug|pug.html)$/ : /.(pug.json|pug.json.html|pug|pug.html)$/,
    json: /.(json.pug|json.pug.html)$/
}
```

### pug
- **Type:** `object`
- **Default:** `{}`

Additional Pug options, see Pug [docs](https://pugjs.org/api/reference.html) for more info.
