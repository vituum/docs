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
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'

export default {
    plugins: [vituum(), pug()]
}
```

## Options

### reload
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `pug` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `Object`
- **Default:** `{}`

Object of named filter functions to use, see Pug [docs](https://pugjs.org/language/filters.html#custom-filters) for more info.

### data
- **Type:** `string`
- **Default:** `['src/data/**/*.json']`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `Object`
- **Default:** `{}`

Other global data to use. Can be `Object` or `function` returning object, or combination of both.

### ignoredPaths
- **Type:** `string[]`
- **Default:** `[]`

Which paths should be ignored from processing as TwigJS.

### formats
- **Type:** `string[]`
- **Default:** `['hbs', 'json.hbs', 'json']`

Which ext-names should be processed by the plugin.

### options
- **Type:** `Object`
- **Default:** `{}`

Additional Pug options, see Pug [docs](https://pugjs.org/api/reference.html) for more info.
