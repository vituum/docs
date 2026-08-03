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

Pages plugin itself doesn't support globs inside [rollupOptions.input](https://vitejs.dev/guide/build.html#multi-page-app), that's Vituum does. For change default Vituum routes from `src/pages` directory use `fast-glob`

```javascript
import pages from 'vituum/plugins/pages.js'
import fg from 'fast-glob'
import { resolve } from 'path'

export default {
    build: {
        rollupOptions: {
            input: fg.sync(['./src/templates/pages/*.html']).map(entry => resolve(process.cwd(), entry))
        },
    },
    plugins: [pages()]
}
```

Pages plugin itself does support only `.html` extention, not files such as eg. `.liquid`, `.twig`, `.json`. For use [Template Engines](https://vituum.dev/guide/template-engines.html) plugins use `.liquid.html`, `.twig.html`, `.json.html`.

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
