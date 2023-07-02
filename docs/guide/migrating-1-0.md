# Migrating to 1.0

1.0 is a complete rewrite and various functions were removed or simplified

* Vituum is no longer defined as a wrapper around Vite, but as a Vite plugin
* PostCSS plugins are no longer included by default, to add them use [@vituum/vite-plugin-postcss](/plugins/postcss)
* Various main config options were removed, see [config](/config/main-options) for more details what remained
* `src/views` directory was changed to `src/pages`, but you can still use views by changing it in the config (see [main-options](/config/main-options.html#input) and [pages](/plugins/pages.html#dir))
* `vituum` build command was removed in favour of building directly with Vite
* Integrations were removed, and everything is a Vite plugin now
* Defining template with `<script type="application/json">` was removed in favour of defining templates with files (`.liquid`, `.pug`, `.json` etc.)

Here is an example of upgrading the Vituum config from `0.0.X` to `1.0`

### 0.0.X
```javascript
import { defineConfig } from 'vituum'
import liquid from '@vituum/liquid'

export default defineConfig({
    integrations: [liquid()],
    templates: {
        format: 'liquid'
    }
})
```

### 1.0.0
```javascript
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'

export default {
    plugins: [vituum(), liquid()]
}
```

