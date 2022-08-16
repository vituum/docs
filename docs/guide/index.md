# Getting Started

## Overview

Vituum is a mix of words **Vite** _(French word for "quick")_ and **Tuum** _<br>(Estonion word for "core")_<br><br>
It's a wrapper around **Vite** which includes predefined config and set of plugins

* Primary focus is on easy `backend integration`, but can be used for anything.
* Modified build command `vituum build` is used, which supports building of template engine files ending with extname such as `.twig` and `.latte`

You can learn more about **Vituum** at the [Features page](/guide/features)


## Scaffolding Your First Vituum Project
```bash
$ mkdir my-project && cd my-project
$ npm i vituum --save-dev
```

Then add your Vituum [config](/config/). After that you can run Vite.

```bash
$ npx vite
```

You can learn more about how to use Vituum in the examples bellow

## Trying Vituum Online

You can also try Vituum online on [StackBlitz](https://stackblitz.com/). 

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));">
<div>

### Basic
* [vituum](https://vite.new/vanilla)
* [vituum + posthtml](https://vite.new/vanilla)
* [vituum + vue](https://vite.new/vanilla)
* [vituum + less](https://vite.new/vanilla)
* [vituum + sass](https://vite.new/vanilla)

</div>

<div>

### CSS
* [vituum + tailwind](https://vite.new/vanilla)
* [vituum + uno](https://vite.new/vanilla)
* [vituum + windi](https://vite.new/vanilla)
* [vituum + openprops](https://vite.new/vanilla)
* [vituum + newlogic ui](https://vite.new/vanilla)

</div>

<div>

### Templates
* [vituum + twig](https://vite.new/vanilla)
* [vituum + latte](https://vite.new/vanilla)
* [vituum + handlebars](https://vite.new/vanilla)
* [vituum + pug](https://vite.new/vanilla)
* [vituum + liquid](https://vite.new/vanilla)
* [vituum + nunjucks](https://vite.new/vanilla)

</div>
</div>

## Basic commands

* `vite` - runs the dev server
* `vituum build` - builds the files into `public` directory
* `vituum headless` - builds all files except html into `public` directory
* `vituum cleanup` - cleans the `src` and `public` dirs of built or temp files, can be handy if something went wrong in the build
* `vite preview` - preview the built files via dev server
