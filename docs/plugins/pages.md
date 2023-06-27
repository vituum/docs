# Pages
_Internal Vituum Plugin_

Adds multi-page support for Vite inside `pages` directory. You can add files and directories inside `src/pages` and every request should route there with this plugin. 

Applies only on `.html` files and template files such as eg. `.liquid`, `.twig`, `.json`.

## Install
**npm**
```bash
npm i vituum --save-dev
```
**yarn**
```bash
yarn add vituum -D
```

## Config
```javascript
import vituum from 'vituum'

export default {
    plugins: [vituum()]
}
```

### Using separately

```javascript
import pages from 'vituum/plugins/pages.js'

export default {
    plugins: [pages()]
}
```

## Options

### root

- **Type:** `string`
- **Default:** `'./src'`

Determines where does pages routing work by default outside of `pages` directory. Path is relative to Vite `root`.

### dir

- **Type:** `string`
- **Default:** `./src/pages'`

Directory where your `.html` or template engine page files are located. Requests are auto-redirected to this directory. Path is relative to Vite `root`.

### ignoredPaths

- **Type:** `string[]`
- **Default:** `[]`

Determines which paths should be ignored from routing to `pages` directory and should fallback to `pages.root`. This should be url pathname not starting with slash.

## normalizeBasePath

- **Type:** `boolean`
- **Default:** `false`

Renames and normalizes paths in output `.html` files. It's a workaround if vite `base` is set to `'./'` - [#12](https://github.com/vituum/vituum/issues/12)
