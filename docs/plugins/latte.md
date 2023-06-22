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
import vituum from 'vituum'
import latte from '@vituum/vite-plugin-latte'

export default {
    plugins: [vituum(), latte()]
}
```

## Options

### reload
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `latte` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `Object`
- **Default:** `{}`

Object of named filters to use. Can be function or string providing path to `.php` or `.js` (faster than function) file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-filters).

### functions
- **Type:** `Object`
- **Default:** `{}`

Object of named functions to use. Can be function or string providing path to `.php` or `.js` (faster than function) file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-functions).

### tags
- **Type:** `Object`
- **Default:** `{}`

Object of named tags to use. Only a string providing path to `.php` file is possible. See official docs [here](https://latte.nette.org/en/extending-latte#toc-tags).

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
- **Default:** `['latte', 'json.latte', 'json']`

Which ext-names should be processed by the plugin.

### bin
- **Type:** `string`
- **Default:** `php`

Which binary should be used for processing `latte` files, you can also set `docker` but it's slower.

### renderTransformedHtml
- **Type:** `Function`
- **Default:** `(path) => false`

Determines which path should be rendered as transformedHtml from Vite, otherwise `php` is loading your file directly from disk and not from transformed stream.

You might need this if you need to transform your file via Vite before `latte` renders your file.
