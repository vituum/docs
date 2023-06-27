# Handlebars
_[@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars)_
```handlebars
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
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `hbs` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### helpers
- **Type:** `Object`
- **Default:** `{}`

Object of named helper functions to use, see Handlebars [docs](https://handlebarsjs.com/api-reference/helpers.html) for more info.

### partials.directory
- **Type:** `string`
- **Default:** `null`

Root directory for partials. Directory is inherited from plugin `root` by default.

### partials.extname
- **Type:** `boolean`
- **Default:** `true`

Whenever to use ext-name in partial path like this `"path/to/partial.hbs`

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


### options.compileOptions
- **Type:** `Object`
- **Default:** `{}`

Additional Handlebars compileOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/compilation.html) for more info.

### options.runtimeOptions
- **Type:** `Object`
- **Default:** `{}`

Additional Handlebars runtimeOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/runtime-options.html) for more info.
