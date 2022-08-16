---
title: Configuring Vite
---

# Configuring Vituum

Each **Vituum** project needs to have config via `vite.config.js` inside [project root](https://vitejs.dev/guide/#index-html-and-project-root).

The most basic config file looks like this:

```js
import { defineConfig } from 'vituum'

export default defineConfig({
    // your config goes here
})
```


**Vituum** is a wrapper around **Vite**, which overrides some settings by default and adds additional plugins.<br><br>
These are the main changes which **Vituum** overrides by default in **Vite** config:

```javascript
server: {
    open: vituum.server.open
},
plugins: vituum.plugins,
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

See [Vite config](https://vitejs.dev/config/) for more details.

## Vite

Any additional vite options can be added via `vite` option and you can further adjust the settings which Vituum changes by default

See [Vite config](https://vitejs.dev/config/shared-options) for more details.
