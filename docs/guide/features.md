# About Vituum and its features

The main goal of Vituum is to add some additional features on top of Vite via plugins.

It's also a bridge for developers who still depend on template engines or older front-end tools like **gulp** or **grunt** and want to migrate to **Vite**.

Vituum can also be used as a small static site generator, but we recommend using [Astro](https://astro.build/) or [Eleventy](https://www.11ty.dev/) for a full SSG experience.

Most of the features are optional and can be added via dedicated [Vite Plugins](/plugins/).

## Multi-page support
Vituum makes it easy to use multiple `.html` files in Vite out of the box.

So you can add glob patterns to [rollupOptions.input](https://vitejs.dev/guide/build.html#multi-page-app) and use multi-page routing in pages directory.

```javascript
export default {
    build: {
        rollupOptions: {
            input: ['./src/pages/**/*.html']
        }
    }
}
```

You can use this to prototype fast without the need to change much in the config.<br>By default, Vituum routes from `src/pages` directory.

You can even enhance this with [PostHTML](/plugins/posthtml) syntax like `<include>` to include small `html` components or use [Template Engines](/guide/template-engines) for full templating experience.

Example of the structure:
* 📁 **src**
    * 📁 **components**
      * 📄 Button.html
    * 📁 **pages**
      * 📁 **nested**
        * 📄 index.html
      * 📄 index.html
      * 📄 about.html

## Template Engines
Today frontend tools are awesome, but the good old template engines don't get enough love anymore.

Vituum tries to change this by supporting template engines in Vite.<br>Let's go _Vite_ with the templates!

**Twig**, **Liquid**, **Pug**, **Nunjucks**, **Handlebars**, **Latte** - there are a bunch of them!

Template engines are great for fast prototyping and preparing templates fast for PHP backend frameworks like Symfony, Laravel or Nette.

Example of the structure:
* 📁 **src**
    * 📁 **layouts**
        * 📄 Layout.twig
    * 📁 **pages**
        * 📁 **nested**
            * 📄 index.twig
        * 📄 index.json
        * 📄 about.twig

<br>Learn more how to use template engines in Vituum [here](/guide/template-engines).

## Project structure
Pre-defined optional structure for your template files. You can always change the structure to your own liking.

* 📁 **public** - place for static files and dist files
* 📁 **src**
    * 📁 **assets** - your static files as `.png`, `.svg`
    * 📁 **data** - your `.json` data used in templates
    * 📁 **emails** - your email template files
    * 📁 **scripts** - your script files as `.js`, `.ts`
    * 📁 **styles** - your styles files as `.css`, `.scss`
    * 📁 **components** - your template files as `.twig`, `.latte`
    * 📁 **layouts** - your template layout files as `.twig`, `.latte`
    * 📁 **pages** - your pages as `.html`, you can also nest or define page as `.json` or `.twig`, `.latte` and other template engines

## Imports
In vanilla `css` and `js` you can import one file at a time. Globs like `*.css` or `*.js` are not possible.

To help import multiple files automatically, **Vituum** uses internal plugin which adds all file imports in the directories into a single file.

This is great if you have a complex project with a lot of styles or scripts files.

All filetypes are supported, so you can use this also with `.css`, `.less`, `.scss` <br>or `.js`,  `.ts` or add your own via [config](/config/main-options#imports).

Example of the structure:
* 📁 **src**
    * 📁 **styles**
        * 📁 **Components**
            * 📄 +.css
            * 📄 Button.css
            * 📄 Badge.css
        * 📄 main.css<br><br>

```css
/* +.css */
@import "Button.css";
@import "Badge.css";
```
```css
/* main.css */
@import "Components/+.css";
```

## Email Templates
Writing email templates was always tricky. **Vituum** tries to make it easier for you.

* With [@vituum/vite-plugin-juice](/plugins/juice) plugin you can write styles in **PostCSS** or any **pre-processor** you want. Everything will be inlined to html via **[Juice](https://github.com/Automattic/juice)**.
* Html can be written with any [Template Engine](/guide/template-engines), including **PostHTML** or in plain HTML.
* You can even use TailwindCSS or send your email for test via [@vituum/vite-plugin-send](/plugins/send)

Learn more about [Email Templates here](/guide/email-templates).

## Other use
Don't need template engines? You just want to write a **Vue** or **React** app?<br> **Sure no problem, we do too!**

**Vituum** is a set of plugins for **Vite**. So you can use other plugins like **PostCSS** or **TailwindCSS** in your project, or any of the internal plugins! Learn more on [Plugins page](/plugins/).

Or go see all examples of usage [here](/guide/#trying-vituum-online).
