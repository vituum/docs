# Imports
_Internal Vituum Plugin_

Learn more about this plugin on [Features](/guide/features#⬇️-imports) page.

## Install
**npm**
```bash
npm i vituum --save-dev
```
**yarn**
```bash
yarn add vituum -D
```

## Config
```javascript
import vituum from 'vituum'

export default {
    plugins: [vituum()]
}
```

### Using separately

```javascript
import imports from 'vituum/plugins/imports.js'

export default {
    plugins: [imports()]
}
```

## Options

## paths

- **Type:** `string[]`
- **Default:** `['./src/styles/*/**', './src/scripts/*/**']`

Paths where auto-imports should be resolved.


## extnamePattern.styles

- **Type:** `RegExp`
- **Default:** `/.(css|less|scss|pcss)$/`

Types of files that should be resolved as styles

## extnamePattern.scripts

- **Type:** `RegExp`
- **Default:** `/.(js|mjs|ts)$/`

Types of files that should be resolved as scripts

## filenamePattern

- **Type:** `Object`
- **Default:** `{'+.css': 'src/styles', '+.js': 'src/scripts'}`

Filename for file with imports paths and where it should be applied.<br> 
Path can be also `string[]` of paths.
