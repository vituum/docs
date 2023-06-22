# Getting Started

## Overview

Vituum is a mix of words **Vite** _(French word for "quick")_ and **Tuum** _<br>(Estonian word for "core")_<br><br>
It's a set of plugins for **Vite**, full list can be found on [Plugins page](/plugins/).

## Get started
Already using preview version of Vituum 0.0.x? [Learn more](/guide/migrating-1-0) how to migrate to 1.0.

```bash
$ npm create vite@latest
$ npm i vituum --save-dev
```

Then add Vituum to your [Vite config](https://vitejs.dev/config/), this adds basic multi-page `.html` support in `src/pages`.
Add more functionality, template engines and more with [Vituum Plugins](/plugins/).

```javascript
import vituum from 'vituum'

export default {
    plugins: [
        vituum()
    ]
}

```
And start Vite. Or build your project, see [Vite docs](https://vitejs.dev/guide/cli.html) for more info.
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
* [vituum + postcss](https://stackblitz.com/github/vituum/vituum/tree/main/examples/postcss)
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
* [vituum + tailwindcss](https://stackblitz.com/github/vituum/vituum/tree/main/examples/tailwindcss)
* [vituum + winduum](https://stackblitz.com/github/vituum/vituum/tree/main/examples/winduum)
* [vituum + openprops](https://stackblitz.com/github/vituum/vituum/tree/main/examples/openprops)
* [vituum + bootstrap](https://stackblitz.com/github/vituum/vituum/tree/main/examples/bootstrap)
* [vituum + bulma](https://stackblitz.com/github/vituum/vituum/tree/main/examples/bulma)

</div>
</div>

All examples can be found on [GitHub](https://github.com/vituum/vituum/tree/main/examples).
