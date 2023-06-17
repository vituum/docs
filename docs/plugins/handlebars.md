# Handlebars
_[@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars)_
```handlebars
```twig
<ul id="navigation">
    {{#each navigation as |item|}}
        <li>{{ item }}</li>
    {{/each}}
</ul>
```

See [docs](https://handlebarsjs.com/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-handlebars --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-handlebars -D
```

## Config
```javascript
import handlebars from '@vituum/vite-plugin-handlebars'

export default {
    plugins: [handlebars()]
}
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `hbs` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### helpers
- **Type:** `object`
- **Default:** `{}`

Object of named helper functions to use, see Handlebars [docs](https://handlebarsjs.com/api-reference/helpers.html) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### partials.directory
- **Type:** `string`
- **Default:** `null`

Root directory for partials. Directory is inherited from plugin `root` by default.

### partials.extname
- **Type:** `boolean`
- **Default:** `true`

Whenever to use ext-name in partial path like this `"path/to/partial.hbs`

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: config.templates.format === 'hbs' ? /.(json|json.html|hbs.json|hbs.json.html|hbs|hbs.html)$/ : /.(hbs.json|hbs.json.html|hbs|hbs.html)$/,
    json: /.(json.hbs|json.hbs.html)$/
}
```

### handlebars.compileOptions
- **Type:** `object`
- **Default:** `{}`

Additional Handlebars compileOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/compilation.html) for more info. Not well documented actually.

### handlebars.runtimeOptions
- **Type:** `object`
- **Default:** `{}`

Additional Handlebars runtimeOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/runtime-options.html) for more info. Not well documented actually.
