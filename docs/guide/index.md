# Getting Started

## Overview

Vituum is a mix of words **Vite** _(French word for "quick")_ and **Tuum** _<br>(Estonion word for "core")_<br><br>
It's a wrapper around **Vite** which includes predefined config and set of plugins

* Primary focus is on easy `backend integration`, but can be used for anything.
* Modified build command `vituum build` is used, which supports building of template engine files ending with extname such as `.twig` and `.latte`

## 🛠️ Integrated tools and plugins
* **[Vite](https://vitejs.dev/)** blazing fast and next generation frontend tooling
* **[PostCSS](https://postcss.org/)** with core plugins (postcss-import, postcss-nesting, custom-media, custom-selectors)
* **[PostHTML](https://posthtml.org/)** with core plugins (include, extend, expressions)
* **[Tailwind CSS](https://tailwindcss.com/)** - utility-first CSS framework packed with classes *(optional)*
* **[Juice](https://github.com/Automattic/juice)** inlining styles for email templates
* **[Nodemailer](https://nodemailer.com)** easy send test your email templates with `vituum send` command

## Trying Vituum Online

You can try Vite online on [StackBlitz](https://stackblitz.com/). 

* [vanilla](https://vite.new/vanilla)
* [twig](https://vite.new/vanilla)
* [latte](https://vite.new/vanilla)

## Install
```bash
mkdir my-projects && cd my-project
npm i vituum --save-dev
npx vite
```
