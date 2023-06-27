# Nunjucks
_[@vituum/vite-plugin-nunjucks](https://github.com/vituum/vite-plugin-nunjucks)_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://mozilla.github.io/nunjucks/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-nunjucks --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-nunjucks -D
```

## Config
```javascript
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    plugins: [vituum(), nunjucks()]
}
```

## Options

### reload
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `njk` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `Object`
- **Default:** `{}`

Object of named filter functions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-filters) for more info.

### extensions
- **Type:** `Object`
- **Default:** `{}`

Object of named extensions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-tags) for more info.

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
- **Default:** `['njk', 'json.njk', 'json']`

Which ext-names should be processed by the plugin.

### options
- **Type:** `Object`
- **Default:** `{}`

Additional Nunjucks options, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#environment) for more info.
