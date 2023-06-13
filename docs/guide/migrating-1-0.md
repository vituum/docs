# Migrating to 1.0

1.0 is a complete rewrite and various functions were removed or simplified

* Vituum is no longer defined as a wrapper around Vite, but as a Vite plugin
* Various main config options were removed, see [config](/config/main-options) for more details what remained
* `vituum` build command was removed in favour of building directly with vite
* Integrations were removed, and everything is a Vite plugin now

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
import { defineConfig } from 'vite'
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'

export default defineConfig({
    plugins: [vituum(), liquid()]
})
```

