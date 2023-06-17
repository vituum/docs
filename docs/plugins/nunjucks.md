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
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    plugins: [nunjucks()]
}
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `njk` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-filters) for more info.

### extensions
- **Type:** `object`
- **Default:** `{}`

Object of named extensions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-tags) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.json`.

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
    html: (config.templates.format === 'njk' || config.templates.format === 'nunjucks') ? /.(json|json.html|njk.json|njk.json.html|njk|njk.html)$/ : /.(njk.json|njk.json.html|njk|njk.html)$/,
    json: /.(json.njk|json.njk.html)$/
}
```

### nunjucks
- **Type:** `object`
- **Default:** `{}`

Additional Nunjucks options, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#environment) for more info.
