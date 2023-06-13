# Plugins
Here are some official **Vituum** plugins for Vite!

## Pages _(internal @vituum plugin)_

## Imports _(internal @vituum plugin)_

## PostCSS _([@vituum/vite-plugin-postcss](https://www.npmjs.com/package/@vituum/vite-plugin-postcss))_

Adds more base **PostCSS** plugins to Vite.<br>
Includes `postcss-import`, `postcss-nesting`, `postcss-custom-media`, `autoprefixer`

Add more via Vite or PostCSS config. See [Vite docs](https://vitejs.dev/guide/features.html#postcss) for more info.

### Install
**npm**
```bash
npm i @vituum/vite-plugin-postcss --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-postcss -D
```

### Config
```javascript
import postcss from '@vituum/vite-plugin-postcss'

export default {
    plugins: [postcss()]
}
```

See [@vituum/vite-plugin-postcss](/config/plugins-options#vituum-postcss) to learn more about config options

## Tailwind _([@vituum/vite-plugin-tailwind](https://www.npmjs.com/package/@vituum/vite-plugin-tailwind))_

Adds out of the box support for **TailwindCSS** to your project. Including base **PostCSS** plugins from `@vituum/vite-plugin-postcss`

See [docs](https://tailwindcss.com/docs) for more info about **TailwindCSS**

### Install
**npm**
```bash
npm i @vituum/vite-plugin-tailwind --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-tailwind -D
```

### Config
```javascript
import tailwind from '@vituum/vite-plugin-tailwind'

export default {
    plugins: [tailwind()]
}
```

See [@vituum/tailwind](/config/integrations-options#vituum-tailwind) to learn more about config options

## Juice _([@vituum/vite-plugin-juice](https://www.npmjs.com/package/@vituum/vite-plugin-juice))_

Adds support for inlining of your `css` files to `html`.<br>
It's handy for creating email templates. Learn more about that [here](/guide/features#%E2%9C%89%EF%B8%8F-emails).

See [docs](https://github.com/Automattic/juice) for more info about **Juice**.

### Install
**npm**
```bash
npm i @vituum/vite-plugin-juice --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-juice -D
```

### Config
```javascript
import { defineConfig } from 'vituum'
import juice from '@vituum/vite-plugin-juice'

export default defineConfig({
    integrations: [juice()]
})
```

See [@vituum/vite-plugin-juice](/config/integrations-options#vituum-juice) to learn more about config options

## PostHTML _([@vituum/vite-plugin-posthtml](https://www.npmjs.com/package/@vituum/vite-plugin-posthtml))_
Learn more about use of this plugin [here](/guide/template-engines#posthtml-vituum-vite-plugin-posthtml)

## Twig _([@vituum/vite-plugin-twig](https://www.npmjs.com/package/@vituum/vite-plugin-twig))_
Learn more about use of this plugin [here](/guide/template-engines#twig-vituum-vite-plugin-twig)

## Latte _([@vituum/vite-plugin-twig](https://www.npmjs.com/package/@vituum/vite-plugin-latte))_
Learn more about use of this plugin [here](/guide/template-engines#latte-vituum-vite-plugin-latte)

## Liquid _([@vituum/vite-plugin-liquid](https://www.npmjs.com/package/@vituum/vite-plugin-liquid))_
Learn more about use of this plugin [here](/guide/template-engines#liquid-vituum-vite-plugin-liquid)

## Nunjucks _([@vituum/vite-plugin-nunjucks](https://www.npmjs.com/package/@vituum/vite-plugin-nunjucks))_
Learn more about use of this plugin [here](/guide/template-engines#nunjucks-vituum-vite-plugin-nunjucks)

## Pug _([@vituum/vite-plugin-pug](https://www.npmjs.com/package/@vituum/vite-plugin-pug))_
Learn more about use of this plugin [here](/guide/template-engines#nunjucks-vituum-vite-plugin-pug)

## Handlebars _([@vituum/vite-plugin-handlebars](https://www.npmjs.com/package/@vituum/vite-plugin-handlebars))_
Learn more about use of this plugin [here](/guide/template-engines#nunjucks-vituum-vite-plugin-handlebars)
