---
title: Configuring Vite
---

# Configuring Vituum

**Vituum** needs to be added as a plugin in `vite.config.js` inside a project root.<br>
You can also use `.mjs`, `.ts`, learn more about [Vite config](https://vitejs.dev/config/). 

The most basic config file looks like this:

```js
import vituum from 'vituum'

export default {
    plugins: [vituum()]
}
```

This adds basic [features](/guide/features) like multi-page support and imports. To add more features, you will need to define additional [plugins](/plugins/).

Here is an example of usage with **LiquidJS** and **TailwindCSS**

```js
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

export default {
    plugins: [
        vituum(),
        liquid(),
        tailwindcss()
    ]
}
```

You can also choose to not use Vituum and only use its plugins, that's ok too if you don't need multi-page support and other core features.
