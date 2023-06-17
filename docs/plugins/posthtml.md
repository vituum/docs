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

### plugins
- **Type:** `(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]`
- **Default:** `[]`

Additional PostHTML plugins to use. See PostHTML [GitHub](https://github.com/posthtml) for list of all official plugins.

### options
- **Type:** `object`
- **Default:** `{}`

Additional PostHTML options to use. See PostHTML [options](https://posthtml.org/#/core?id=posthtml-options) for more info.
