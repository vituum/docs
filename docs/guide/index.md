# Getting Started

## Overview

Vituum is a mix of words **Vite** _(French word for "quick")_ and **Tuum** _<br>(Estonion word for "core")_<br><br>
It's a small wrapper around **Vite** which includes predefined config and set of plugins.

* Primary focus is on easy `backend integration`, but can be used for anything.
* Modified build command `vituum build` is used, which supports building of template engine files ending with extname such as `.twig` and `.latte`

You can learn more about **Vituum** and it's features at the [Features page](/guide/features)

::: warning
Vituum is in early preview. Can be used for production, but some features may change overtime.
* some refactoring is needed, also not written in TypeScript at the time
* tests via Vitest need to be written
* template plugins are still experimental and feedback is welcome
:::

## Scaffolding Your First Vituum Project
```bash
$ mkdir my-project && cd my-project
$ npm i vituum --save-dev
```

Then add your Vituum [config](/config/). After that you can run Vite.

```bash
$ npx vite
```

You can learn more about how to use **Vituum** in the examples bellow.

## Trying Vituum Online

You can also try Vituum online on [StackBlitz](https://stackblitz.com/). 

<style>
    @media all and (max-width: 720px) {
        #vituum-examples {
            display: block !important;
        }
    }
</style>

<div id="vituum-examples" style="display: flex; gap: 3rem; font-size: 1.125rem;">
<div>

### Basic
* [vituum](https://stackblitz.com/github/vituum/vituum/tree/main/examples/vanilla)
* [vituum + posthtml](https://stackblitz.com/github/vituum/vituum/tree/main/examples/posthtml)
* [vituum + vue](https://stackblitz.com/github/vituum/vituum/tree/main/examples/vue)
* [vituum + less](https://stackblitz.com/github/vituum/vituum/tree/main/examples/less)
* [vituum + sass](https://stackblitz.com/github/vituum/vituum/tree/main/examples/sass)
* [vituum + juice](https://stackblitz.com/github/vituum/vituum/tree/main/examples/juice)

</div>

<div>

### Templates
* [vituum + twig](https://stackblitz.com/github/vituum/vituum/tree/main/examples/twig)
* [vituum + latte](https://stackblitz.com/github/vituum/vituum/tree/main/examples/latte)
* [vituum + liquid](https://stackblitz.com/github/vituum/vituum/tree/main/examples/liquid)
* [vituum + nunjucks](https://stackblitz.com/github/vituum/vituum/tree/main/examples/nunjucks)
* [vituum + handlebars](https://stackblitz.com/github/vituum/vituum/tree/main/examples/handlebars)
* [vituum + pug](https://stackblitz.com/github/vituum/vituum/tree/main/examples/pug)

</div>

<div>

### CSS
* [vituum + tailwind](https://stackblitz.com/github/vituum/vituum/tree/main/examples/tailwindcss)
* [vituum + openprops](https://stackblitz.com/github/vituum/vituum/tree/main/examples/openprops)
* [vituum + newlogic ui](https://stackblitz.com/github/vituum/vituum/tree/main/examples/newlogic-ui)
* [vituum + bootstrap](https://stackblitz.com/github/vituum/vituum/tree/main/examples/bootstrap)
* [vituum + bulma](https://stackblitz.com/github/vituum/vituum/tree/main/examples/bulma)

</div>
</div>

All sources can be found on [GitHub](https://github.com/vituum/vituum/tree/main/examples).

## Basic commands

* `vite` - runs the vite dev server
* `vituum build` - builds the files into `public` directory
* `vituum headless` - builds all files except html into `public` directory
* `vituum cleanup` - cleans the `src` and `public` dirs of built or temp files
* `vite preview` - preview the built files via vite dev server
