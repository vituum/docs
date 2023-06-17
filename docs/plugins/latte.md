# Latte
_[@vituum/vite-plugin-latte](https://github.com/vituum/vite-plugin-latte)_

* Requires [PHP (8.x)](https://www.php.net/) or [Docker PHP (8.x)](https://hub.docker.com/_/php) to run

```handlebars
<ul id="navigation">
    {foreach ['Home', 'About'] as $item}
        <li>{$item}</li>
    {/foreach}
</ul>

or

<ul id="navigation">
    <li n:foreach="['Home', 'About'] as $item">{$item}</li>
</ul>
```

See [docs](https://latte.nette.org/en/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-latte --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-latte -D
```

## Config
```javascript
import latte from '@vituum/vite-plugin-latte'

export default {
    plugins: [latte()]
}
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `latte` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filters to use. Can be function or string providing path to `.php` file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-filters).

### functions
- **Type:** `object`
- **Default:** `{}`

Object of named functions to use. Can be function or string providing path to `.php` file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-functions).

### tags
- **Type:** `function[]`
- **Default:** `[]`

Object of named tags to use. Only a string providing path to `.php` file. See official docs [here](https://latte.nette.org/en/extending-latte#toc-tags).

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
    html: config.templates.format === 'latte' ? /.(json|json.html|latte.json|latte.json.html|latte|latte.html)$/ : /.(latte.json|latte.json.html|latte|latte.html)$/,
    json: /.(json.latte|json.latte.html)$/
}
```
