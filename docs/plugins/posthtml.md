# PostHTML
_[@vituum/vite-plugin-posthtml](https://github.com/vituum/vite-plugin-posthtml)_

```twig
<extends src="layout.html">
    <block name="body">
        <include src="main.html"></include>
    </block>
</extends>
```

See [docs](https://posthtml.org/) for more info about the syntax

## Install
**npm**
```bash
npm i @vituum/vite-plugin-posthtml --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-posthtml -D
```

## Config
```javascript
import posthtml from '@vituum/vite-plugin-posthtml'

export default {
    plugins: [posthtml()]
}
```

## Options

### root
- **Type:** `string`
- **Default:** `null`

Root path to use for built-in `extend` and `include` plugins. Current path of `.html` is used if not defined.

### extend
- **Type:** `Object | false`
- **Default:** `{}`

PostHTML [posthtml-extend](https://www.npmjs.com/package/posthtml-extend) plugin options. Can be disabled from loading with `false`.

### include
- **Type:** `Object | false`
- **Default:** `{}`

PostHTML [posthtml-include](https://www.npmjs.com/package/posthtml-include) plugin options. Can be disabled from loading with `false`.

### plugins
- **Type:** `(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]`
- **Default:** `[]`

Additional PostHTML plugins to use. See PostHTML [GitHub](https://github.com/posthtml) for list of all official plugins.

### options
- **Type:** `Object`
- **Default:** `{}`

Additional PostHTML options to use. See PostHTML [options](https://posthtml.org/#/core?id=posthtml-options) for more info.
