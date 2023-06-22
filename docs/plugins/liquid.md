# Liquid
_[@vituum/vite-plugin-liquid](https://github.com/vituum/vite-plugin-liquid)_

```twig
<ul id="navigation">
    {% assign items = 'Home,About'|split:',' %}
    {% for item in items %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See official [docs](https://liquidjs.com/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-liquid --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-liquid -D
```

## Config
```javascript
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'

export default {
    plugins: [vituum(), liquid()]
}
```

## Options

### reload
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `liquid` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `Object`
- **Default:** `{}`

Object of named filter functions to use, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Filters) for more info.

### tags
- **Type:** `Function[]`
- **Default:** `[]`

Array of functions that extend LiquidJS with custom tag, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Tags) for more info.

### data
- **Type:** `string | string[]`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `Object`
- **Default:** `{}`

Other global data to use. Can be `Object` or `function` returning object, or combination of both.

### ignoredPaths
- **Type:** `string[]`
- **Default:** `[]`

Which paths should be ignored from processing as LiquidJS.

### formats
- **Type:** `string[]`
- **Default:** `['liquid', 'json.liquid', 'json']`

Which ext-names should be processed by the plugin.

### options.liquidOptions
- **Type:** `Object`
- **Default:** `{}`

Additional LiquidJS options, see LiquidJS [docs](https://liquidjs.com/api/interfaces/LiquidOptions.html) for more info.

### options.renderOptions
- **Type:** `Object`
- **Default:** `{}`

Additional render options, see LiquidJS [docs](https://liquidjs.com/) for more info.

### options.renderFileOptions
- **Type:** `Object`
- **Default:** `{}`

Additional renderFile options, see LiquidJS [docs](https://liquidjs.com/) for more info.
