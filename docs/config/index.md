---
title: Configuring Vite
---

# Configuring Vituum

Each Vituum project needs to have config via `vite.config.js` inside [project root](https://vitejs.dev/guide/#index-html-and-project-root).

The most basic config file looks like this:

```js
import { defineConfig } from 'vituum'

export default defineConfig()
```

See [Vite config](https://vitejs.dev/config/) for more details.


Vituum is a wrapper around Vite, which overrides some settings by default and adds additional plugins. These are the main changes in vite config:

```javascript
server: {
    open: vituum.server.open
},
plugins: vituum.root,
resolve: {
    alias: {
        '/src': vituum.root
    }
},
root: vituum.root,
publicDir: vituum.output,
css: {
    postcss: vituum.styles.postcss
},
build: {
    manifest: vituum.build.manifest,
    outDir: vituum.output,
    rollupOptions: {
        input: FastGlob.sync(vituum.input).map(entry => resolve(process.cwd(), entry))
    }
}
```

## vite

Any additional vite options can be added via `vite` option or you can change back the settings which vituum changes by default
