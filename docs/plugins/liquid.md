## Liquid
_[@vituum/vite-plugin-liquid](https://github.com/vituum/vite-plugin-liquid)_

```twig
<ul id="navigation">
    {% assign items = 'Home,About'|split:',' %}
    {% for item in items %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://liquidjs.com/) for more info about the syntax

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
import liquid from '@vituum/vite-plugin-liquid'

export default {
    plugins: [liquid()]
}
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `liquid` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Filters) for more info.

### tags
- **Type:** `function[]`
- **Default:** `[]`

Array of functions that extend LiquidJS with custom tag, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Tags) for more info.

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
    html: config.templates.format === 'liquid' ? /.(json|json.html|liquid.json|liquid.json.html|liquid|liquid.html)$/ : /.(liquid.json|liquid.json.html|liquid|liquid.html)$/,
    json: /.(json.liquid|json.liquid.html)$/
}
```
