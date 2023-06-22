# Twig
_[@vituum/vite-plugin-twig](https://github.com/vituum/vite-plugin-twig)_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See official [docs](https://twig.symfony.com/doc/3.x/) for more info about the syntax

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
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

export default {
    plugins: [vituum(), twig()]
}
```

## Options

### reload
- **Type:** `boolean` or `Function`
- **Default:** `true`

Whenever to auto-reload browser window upon `twig` or `json` file change. You can also provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. But you can change this to path such as `'./src/'` or `'./src/templates'`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `Object`
- **Default:** `{}`

Object of named filter functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#filters) for more info.

### functions
- **Type:** `Object`
- **Default:** `{}`

Object of named functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#functions) for more info.

### extensions
- **Type:** `Function[]`
- **Default:** `[]`

Array of functions that extend TwigJS with custom tag, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js-With-Custom-Tags) for more info.

### namespaces
- **Type:** `Object`
- **Default:** `{}`

Object defining namespaces, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki#namespaces) for more info.

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
- **Default:** `['twig', 'json.twig', 'json']`

Which ext-names should be processed by the plugin.

### options.compileOptions
- **Type:** `Object`
- **Default:** `{}`

Additional TwigJS compileOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info.

### options.renderOptions
- **Type:** `Object`
- **Default:** `{}`

Additional TwigJS renderOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info.
