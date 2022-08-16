# About Vituum and it's features

The main feature of Vituum is to have minimal config with all modern frontend features cooked-in out of the box and ready to go.

Think of it like a **Vite starter pack** ready to go with some added features listed below.


## 🛠️ Predefined config and plugins
Learn more how Vituum changes the default Vite config in [here](/config/)
* **[PostCSS](https://postcss.org/)** - with core plugins _(postcss-import, postcss-nesting, custom-media, custom-selectors)_ ready to use that modern css syntax today
* **[PostHTML](https://posthtml.org/)** - with core plugins _(include, extend)_ ready to enhance that html syntax
* **[Tailwind CSS](https://tailwindcss.com/)** - no need to configure it, just install it via `npm`, add `config` - and it works out of the box!


## 📄 Multi-page support
Vituum makes it easy to use multiple `.html` files in pages directory out of the box.

You can use this to prototype fast without the need to change anything in the config. Or even enhance this with PostHTML syntax like `<include>` to include small html components.

Example of the structure:
* 📁 **src**
    * 📁 **components**
      * 📄 Button.html
    * 📁 **views**
      * 📁 **nested**
        * 📄 index.html
      * 📄 index.html
      * 📄 about.html

## 📁 Project structure
Pre-defined opinionated structure for your project files. You can always change the structure to your own liking via [config](/config/main-options#input).

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
Today frontend tools are awesome, but the  good old template engines don't get enough love.

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


## 📁 Imports
In vanilla `css` and `js` you can import one file at the time. Globs like `*.css` or `*.js` are not possible.

To help import multiple files automatically, **Vituum** uses plugin which adds all imports in the directories into a single file.

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

You can write styles in **PostCSS** or any **post-processor** you want. Everything will be inlined to html via **Juice**.

Html can be written with **PostHTML** or you can use [template engines](/guide/template-engines).

Example how ti import `css` in template file:
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

**Want to test your email?**<br>You can use `vituum send` to send a test email with your template.

Learn more how to configure this via [config](/config/emails-options).

## Other use
Don't need template engines? You just want to write a **Vue** or **React** app?<br> **Sure no problem, we do too!**

**Vituum** is a wrapper around **Vite**, so anything you can do in Vite, you can do in Vituum. And with some features like PostCSS plugins and TailwindCSS ready to go!

See all examples of use [here](/guide/#trying-vituum-online)
