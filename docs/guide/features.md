# About Vituum and its features

The main goal of Vituum is to add some additional features on top of Vite via plugins.

It's also a bridge for developers who still depend on template engines or older front-end tools like **gulp** or **grunt** and want to migrate to **Vite**.

Vituum can also be used as a small static site generator, but we recommend using [Astro](https://astro.build/) or [Eleventy](https://www.11ty.dev/) for a full SSG experience.

## 📄 Multi-page support
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

You can even enhance this with [PostHTML](/guide/template-engines#posthtml-vituum-vite-plugin-posthtml) syntax like `<include>` to include small html components or use other [template engines](/guide/template-engines) for full templating experience.

Example of the structure:
* 📁 **src**
    * 📁 **templates**
      * 📄 Button.html
    * 📁 **views**
      * 📁 **nested**
        * 📄 index.html
      * 📄 index.html
      * 📄 about.html

## 💡 Template Engines
Today frontend tools are awesome, but the good old template engines don't get enough love anymore.

Vituum tries to change that with support for template engines in Vite.<br>Let's go Vite with the templates!

**Twig**, **Liquid**, **Pug**, **Nunjucks**, **Handlebars**, **Latte** - there are a bunch of them!

Template engines are great for fast prototyping and preparing templates fast for PHP backend frameworks like Symfony, Laravel or Nette.

Example of the structure:
* 📁 **src**
    * 📁 **templates**
        * 📄 Layout.twig
    * 📁 **pages**
        * 📁 **nested**
            * 📄 index.twig
        * 📄 index.json
        * 📄 about.twig

<br>Learn more how to use template engines in Vituum [here](/guide/template-engines).

## 📁 Project structure
Pre-defined optional structure for your template files. You can always change the structure to your own liking via [config](/config/main-options#input).

* 📁 **public** - place for static files and dist files
* 📁 **src**
    * 📁 **data** - your `.json` data used in templates
    * 📁 **emails** - your email templates
    * 📁 **templates** - your template files as `.twig`, `.latte`
    * 📁 **pages** - your pages as `.html`, you can also nest and define page as `.json` or `.twig`, `.latte` and other

## ⬇️ Imports
In vanilla `css` and `js` you can import one file at a time. Globs like `*.css` or `*.js` are not possible.

To help import multiple files automatically, **Vituum** uses internal plugin which adds all file imports in the directories into a single file.

This is great if you have a complex project with a lot of styles or scripts files.

All filetypes are supported, so you can use this also with `.css`, `.less`, `.scss` <br>or `.js`,  `.ts` or add your own via [config](/config/main-options#imports-extnamepattern-styles).

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

## ✉️ Emails
Writing email templates was always tricky. **Vituum** tries to make it easier for you.

You can add [@vituum/vite-plugin-juice](/guide/plugins#juice) plugin and then write styles in **PostCSS** or any **pre-processor** you want. Everything will be inlined to html via **[Juice](https://github.com/Automattic/juice)**.

Html can be written with any [template engine](/guide/template-engines), including **PostHTML**.

Example how to import `css` in template file:
```html
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      @import "main.css";
    </style>
</head>
<body>
<table>
    <!-- your code -->
</table>
</body>
</html>
```
You can find more examples [here](/guide/#trying-vituum-online).

<s>**Want to test your email?**<br>You can use `vituum send` command which is included in the `@vituum/juice` to send a test email with your template. Learn more how to configure this [here](/config/plugins-options#vituum-juice).</s>

## Other use
Don't need template engines? You just want to write a **Vue** or **React** app?<br> **Sure no problem, we do too!**

**Vituum** is a set of plugins for **Vite**. So you can add other plugins like **PostCSS** or **TailwindCSS** to your project, or any of the internal plugins! Learn more on [Plugins page](/plugins).

Or go see all examples of usage [here](/guide/#trying-vituum-online).
