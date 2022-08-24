# About Vituum and it's features

The main feature of Vituum is to have minimal config with all modern frontend features cooked-in out of the box and ready to go.

Think of it like a **Vite starter pack** ready to go with some added features listed below.

It's also a bridge for developers who still depend on template engines or older front-end tools like **gulp** or **grunt** and want to migrate to **Vite**.

Vituum can be also used as a static site generator, but we recommend using [Astro](https://astro.build/) or [Eleventy](https://www.11ty.dev/) for full such experience.


## 🛠️ Predefined config and integrations
Learn more how Vituum changes the default Vite config in [here](/config/)

Vituum is by default extended with core **[PostCSS](https://postcss.org/)** plugins _(postcss-import, postcss-nesting, custom-media, custom-selectors)_ ready to use that modern css syntax today.

Other features such as **[PostHTML](https://posthtml.org/)**, **[Tailwind CSS](https://tailwindcss.com/)**, or [Template engines](/guide/template-engines) can be optionally added with the [Integrations](/guide/integrations). 

With this API you can pre-define config options, plugin options or create tasks that can be run via `vituum` command. See how we used the API for [@newlogic-digital/core](https://github.com/newlogic-digital/core)


## 📄 Multi-page support
Vituum makes it easy to use multiple `.html` files in views directory out of the box.

You can use this to prototype fast without the need to change anything in the config. 

You can even enhance this with [PostHTML](/guide/template-engines#posthtml-vituum-vite-plugin-posthtml) syntax like `<include>` to include small html components or use other [template engines](/guide/template-engines).

Example of the structure:
* 📁 **src**
    * 📁 **templates**
      * 📄 Button.html
    * 📁 **views**
      * 📁 **nested**
        * 📄 index.html
      * 📄 index.html
      * 📄 about.html

## 📁 Project structure
Pre-defined optional structure for your project files. You can always change the structure to your own liking via [config](/config/main-options#input).

* 📁 **public** - place for static files and dist files
* 📁 **src**
    * 📁 **assets** - your static files as `.png`, `.svg`
    * 📁 **data** - your `.json` data used in templates
    * 📁 **emails** - your email templates
    * 📁 **scripts** - your script files as `.js`, `.ts`
    * 📁 **styles** - your styles files as `.css`, `.scss`
    * 📁 **templates** - your template files as `.twig`, `.latte`
    * 📁 **views** - your pages as `.html`, you can also nest and define page as `.json` or `.twig`, `.latte` and other

## 💡 Template Engines
Today frontend tools are awesome, but the good old template engines don't get enough love.

Vituum tries to change that with support for template engines in Vite. Gotta go fast with the templates!

**Twig**, **Liquid**, **Pug**, **Nunjucks**, **Handlebars** - there are a bunch of them!

Template engines are great for fast prototyping and preparing templates fast for backend integrations like Symfony, Laravel or Nette.

Example of the structure:
* 📁 **src**
    * 📁 **templates**
        * 📄 Layout.twig
    * 📁 **views**
        * 📁 **nested**
            * 📄 index.twig
        * 📄 index.json
        * 📄 about.twig

<br>Learn more about supported template engines [here](/guide/template-engines).


## ⬇️ Imports
In vanilla `css` and `js` you can import one file at the time. Globs like `*.css` or `*.js` are not possible.

To help import multiple files automatically, **Vituum** uses internal plugin which adds all file imports in the directories into a single file.

This is great if you have complex project with a lot of styles or scripts files.

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

You can add [@vituum/juice](/guide/integrations#juice-vituum-juice) integration and then write styles in **PostCSS** or any **post-processor** you want. Everything will be inlined to html via **[Juice](https://github.com/Automattic/juice)**.

Html can be written with any [template engine](/guide/template-engines), including **PostHTML**.

Example how to import `css` in template file:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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

**Want to test your email?**<br>You can use `vituum send` command which is included in the `@vituum/juice` to send a test email with your template. Learn more how to configure this [here](/config/integrations-options#vituum-juice).

## Other use
Don't need template engines? You just want to write a **Vue** or **React** app?<br> **Sure no problem, we do too!**

**Vituum** is a wrapper around **Vite**, so anything you can do in Vite, you can do in Vituum. And with some features like **PostCSS** plugins or **TailwindCSS** ready to go!

See all examples of use [here](/guide/#trying-vituum-online)
