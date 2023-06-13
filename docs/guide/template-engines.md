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
See [Plugins Options](/config/integrations-options) to learn more how to configure the plugins.
<br><br>
See [Trying Vituum Online](/guide/#trying-vituum-online) for various examples of template engines
<br><br>

## PostHTML _([@vituum/vite-plugin-posthtml](https://github.com/vituum/vite-plugin-posthtml))_

```twig
<extends src="layout.html">
    <block name="body">
        <include src="main.html"></include>
    </block>
</extends>
```

See [docs](https://posthtml.org/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-posthtml --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-posthtml -D
```

### Config
```javascript
import posthtml from '@vituum/vite-plugin-posthtml'

export default {
    plugins: [posthtml()]
}
```

See [@vituum/vite-plugin-posthtml](/config/integrations-options#templates-posthtml) to learn more about config options

## Twig _([@vituum/vite-plugin-twig](https://github.com/vituum/vite-plugin-twig))_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://twig.symfony.com/doc/3.x/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-twig --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-twig -D
```

### Config
```javascript
import twig from '@vituum/vite-plugin-twig'

export default {
    plugins: [twig()]
}
```

See [@vituum/vite-plugin-twig](/config/integrations-options#templates-twig) to learn more about config options

## Latte _([@vituum/vite-plugin-latte](https://github.com/vituum/vite-plugin-latte))_

* Requires [PHP (8.x)](https://www.php.net/) or [Docker PHP (8.x)](https://hub.docker.com/_/php) to run

```handlebars
<ul id="navigation">
    {foreach ['Home', 'About'] as $item}
        <li>{$item}</li>
    {/foreach}
</ul>

or

<ul id="navigation">
    <li n:foreach="['Home', 'About'] as $item">{$item}</li>
</ul>
```

See [docs](https://latte.nette.org/en/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-latte --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-latte -D
```

### Config
```javascript
import latte from '@vituum/vite-plugin-latte'

export default {
    plugins: [latte()]
}
```

See [@vituum/vite-plugin-latte](/config/integrations-options#templates-latte) to learn more about config options

## Liquid _([@vituum/vite-plugin-liquid](https://github.com/vituum/vite-plugin-liquid))_

```twig
<ul id="navigation">
    {% assign items = 'Home,About'|split:',' %}
    {% for item in items %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://liquidjs.com/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-liquid --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-liquid -D
```

### Config
```javascript
import liquid from '@vituum/vite-plugin-liquid'

export default {
    plugins: [liquid()]
}
```

See [@vituum/vite-plugin-liquid](/config/integrations-options#templates-liquid) to learn more about config options

## Nunjucks _([@vituum/vite-plugin-nunjucks](https://github.com/vituum/vite-plugin-nunjucks))_

```twig
<ul id="navigation">
    {% for item in ['Home', 'About'] %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```

See [docs](https://mozilla.github.io/nunjucks/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-nunjucks --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-nunjucks -D
```

### Config
```javascript
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    plugins: [nunjucks()]
}
```

See [@vituum/vite-plugin-nunjucks](/config/integrations-options#templates-nunjucks) to learn more about config options

## Pug _([@vituum/vite-plugin-pug](https://github.com/vituum/vite-plugin-pug))_

```pug
ul(id='navigation')
  each item in ['Home', 'About']
    li= item
```

See [docs](https://pugjs.org) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-pug --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-pug -D
```

### Config
```javascript
import pug from '@vituum/vite-plugin-pug'

export default defineConfig({
    plugins: [pug()]
})
```

See [@vituum/vite-plugin-pug](/config/integrations-options#templates-pug) to learn more about config options

## Handlebars _([@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars))_
```handlebars
```twig
<ul id="navigation">
    {{#each navigation as |item|}}
        <li>{{ item }}</li>
    {{/each}}
</ul>
```

See [docs](https://handlebarsjs.com/) for more info about the syntax

### Install
**npm**
```bash
npm i @vituum/vite-plugin-handlebars --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-handlebars -D
```

### Config
```javascript
import handlebars from '@vituum/vite-plugin-handlebars'

export default {
    plugins: [handlebars()]
}
```

See [@vituum/vite-plugin-handlebars](/config/integrations-options#templates-handlebars) to learn more about config options

## Create your own plugin

Vituum can be used with any template engine plugin made for Vite. 

Vite doesn't support ext-names for template engine by default. That's why Vituum uses internal API to change file names before and after build via Vite plugin API so templates are treated as `.html` files during build.

You can use the same [internal API](https://github.com/vituum/vituum/blob/next/utils/build.js) for your own plugin or make your own.

Supported ext-names for Vite server can be changed via [config](/config/main-options#templates-formats)
