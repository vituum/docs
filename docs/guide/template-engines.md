# Template engines

Following template engines are supported via [Plugins](/guide/plugins). You can use them separately or with **Vituum** core plugin which adds multi-page support and other [features](/guide/features) in **Vite**.

You can add pages in the **📁 pages** directory, and your templates files should be located in **📁&nbsp;templates** directory.<br>

Here is an example of how to use **Liquid** as a template engine inside the pages directory:
* `*.liquid` - classic twig template file, `.liquid.json` file with the same name can be added to add data to the template
* `*.json.liquid` - for non-html data such as json. `liquid` is input and `json` is output (as a `.json` file) - you can use this if you have custom tag or function that transforms `html` into `json`
* `*.json` - for defining a page only with data, template is auto-loaded from the `template` variable inside the file, or from plugin config, or from **📁 data** directory inside a `.json` file (and you can add other shared data for all your templates here)

Same goes for any other template engine, just change the `.liquid` to something else. You can even use more template engines at the same time.<br>

Only one template engine can be used as `*.json` at the same time though. If you have more than one template engine, you have to configure that separately.
<br><br>
See [Plugins Options](/config/plugins-options) to learn more how to configure the plugins.
<br><br>
See [Trying Vituum Online](/guide/#trying-vituum-online) for various examples of template engines

## Create your own plugin

Vituum can be used with any template engine plugin made for Vite. 

Vite doesn't support ext-names for template engine by default. That's why Vituum uses internal API to change file names before and after build via Vite plugin API so templates are treated as `.html` files during build.

You can use the same [internal API](https://github.com/vituum/vituum/blob/next/utils/build.js) for your own plugin or make your own.

Supported ext-names for Vite server can be changed via [config](/config/main-options#templates-formats)
