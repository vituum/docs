---
title: Configuring Vite
---

# Configuring Vituum

Each **Vituum** project needs to have config via `vite.config.js` inside project root.<br>
You can also use `.mjs`, `.ts` ext-name, this is same as [Vite config](https://vitejs.dev/config/). 

The most basic config file looks like this:

```js
import { defineConfig } from 'vituum'

export default defineConfig({
    // your config goes here
})
```

**Vituum** is a small wrapper around **Vite**, uses own options and overrides some settings by default and adds additional plugins. See [Main Options](/config/main-options) for more info about **Vituum** options. <br><br>
These are the main changes which **Vituum** overrides by default in **Vite** config:

```javascript
server: {
    host: true,
    fsServe: {
        strict: false
    },
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
    postcss: vituum.postcss
},
build: {
    manifest: vituum.build.manifest,
    outDir: vituum.output, 
    emptyOutDir: false,
    polyfillModulePreload: false,
    rollupOptions: {
        input: FastGlob.sync(vituum.input).map(entry => resolve(process.cwd(), entry))
    }
}
```

## Vite

Any additional vite options can be added via `vite` option, and you can further adjust the settings which Vituum changes by default

See [Vite config](https://vitejs.dev/config/) for more details.
