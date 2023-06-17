# Twig
_[@vituum/vite-plugin-twig](https://github.com/vituum/vite-plugin-twig)_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://twig.symfony.com/doc/3.x/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-twig --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-twig -D
```

## Config
```javascript
import twig from '@vituum/vite-plugin-twig'

export default {
    plugins: [twig()]
}
```

## Options

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `twig` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#filters) for more info.

### functions
- **Type:** `object`
- **Default:** `{}`

Object of named functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#functions) for more info.

### extensions
- **Type:** `function[]`
- **Default:** `[]`

Array of functions that extend TwigJS with custom tag, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js-With-Custom-Tags) for more info.

### namespaces
- **Type:** `object`
- **Default:** `{}`

Object defining namespaces, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki#namespaces) for more info.

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
    html: config.templates.format === 'twig' ? /.(json|json.html|twig.json|twig.json.html|twig|twig.html)$/ : /.(twig.json|twig.json.html|twig|twig.html)$/,
    json: /.(json.twig|json.twig.html)$/
}
```

### twig.compileOptions
- **Type:** `object`
- **Default:** `{}`

Additional TwigJS compileOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info. It's not well documented.

### twig.renderOptions
- **Type:** `object`
- **Default:** `{}`

Additional TwigJS renderOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info. It's not well documented.
