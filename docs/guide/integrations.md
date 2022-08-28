# Integrations
With this API you can pre-define config options, plugin options or create tasks that can be run via `vituum` command. Here are some official **Vituum** integrations.

## Tailwind _([@vituum/tailwind](https://www.npmjs.com/package/@vituum/tailwind))_

Adds out of the box support for **TailwindCSS** to your project. Also, with the same core PostCSS plugins already included in **Vituum**.

See [docs](https://tailwindcss.com/docs) for more info about **TailwindCSS**

### Install
**npm**
```bash
npm i @vituum/tailwind --save-dev
```
**yarn**
```bash
yarn add @vituum/tailwind -D
```

### Config
```javascript
import { defineConfig } from 'vituum'
import tailwind from '@vituum/tailwind'

export default defineConfig({
    integrations: [tailwind()]
})
```

See [@vituum/tailwind](/config/integrations-options#vituum-tailwind) to learn more about config options

## Juice _([@vituum/juice](https://www.npmjs.com/package/@vituum/juice))_

Adds [@vituum/vite-plugin-juice](https://github.com/vituum/vite-plugin-juice) to your project with pre-defined config.

Also adds `vituum send` command for sending test emails with `nodemailer`

This plugin is used to inline your `css` to `html`. It's handy for creating email templates. Learn more about that [here](/guide/features#%E2%9C%89%EF%B8%8F-emails).

See [docs](https://github.com/Automattic/juice) for more info about **Juice**.

### Install
**npm**
```bash
npm i @vituum/juice --save-dev
```
**yarn**
```bash
yarn add @vituum/juice -D
```

### Config
```javascript
import { defineConfig } from 'vituum'
import juice from '@vituum/juice'

export default defineConfig({
    integrations: [juice()]
})
```

See [@vituum/juice](/config/integrations-options#vituum-juice) to learn more about config options

## PostHTML _([@vituum/posthtml](https://www.npmjs.com/package/@vituum/posthtml))_
Learn more about use of this integration [here](/guide/template-engines#posthtml-vituum-vite-plugin-posthtml)

## Twig _([@vituum/twig](https://www.npmjs.com/package/@vituum/twig))_
Learn more about use of this integration [here](/guide/template-engines#twig-vituum-vite-plugin-twig)

## Latte _([@vituum/twig](https://www.npmjs.com/package/@vituum/latte))_
Learn more about use of this integration [here](/guide/template-engines#latte-vituum-vite-plugin-latte)

## Liquid _([@vituum/liquid](https://www.npmjs.com/package/@vituum/liquid))_
Learn more about use of this integration [here](/guide/template-engines#liquid-vituum-vite-plugin-liquid)

## Nunjucks _([@vituum/nunjucks](https://www.npmjs.com/package/@vituum/nunjucks))_
Learn more about use of this integration [here](/guide/template-engines#nunjucks-vituum-vite-plugin-nunjucks)

## Pug _([@vituum/pug](https://www.npmjs.com/package/@vituum/pug))_
Learn more about use of this integration [here](/guide/template-engines#nunjucks-vituum-vite-plugin-pug)

## Handlebars _([@vituum/handlebars](https://www.npmjs.com/package/@vituum/handlebars))_
Learn more about use of this integration [here](/guide/template-engines#nunjucks-vituum-vite-plugin-handlebars)

## Create your own integration

You can get inspiration from the code of official **Vituum** integrations [here](https://github.com/vituum/vituum/tree/main/packages/integrations).

Integration can be object or function that returns object with vite plugin, config or task (can be run with `vituum` command)

```javascript
const integration = (userConfig = {}) => {
    return {
        plugin: (vituumConfig) => yourVitePlugin(userConfig),
        config: {
            // vituum config defaults to change
        },
        task: {
            name: 'task-name',
            action: yourFunction()
        }
    }
}

export default integration
```
