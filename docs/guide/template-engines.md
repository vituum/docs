# Template engines

Following template engines are supported via [Integrations](/guide/integrations). They can be also used separately outside of **Vituum** as plugin in **Vite**. But you loose the ext-name support for the template engines.

You can add pages in the **📁 views** directory, and your templates files should be located in **📁&nbsp;templates** directory.<br><br>
Here is an example of how to use **Twig** as a template engine inside the views directory:
* `*.json` (or `*.json.html`) - for defining a page with data, template is auto-loaded from the `template` variable which can be added in config or in **📁 data** directory inside a `.json` file (and you can add other shared data for all your templates here)
* `*.twig` (or `*.twig.html`) - classic twig template file, `.twig.json` file with the same name can be added to add data to the template
* `*.json.twig` (or `*.json.twig.html`) - for non-html data such as json. `twig` is input and `json` is output (as a `.json` file) - you can use this if you have custom tag or function that transforms `html` into `json`

Same goes for any other template engine, just change the `.twig` to something else. You can even use more template engines at the same time.<br><br>
Only one template engine defined as `*.json` can be used at the same time though, you can change the default template engine via `templates.format` in config.
<br><br>
See [Integrations Options](/config/integrations-options) to learn more how to configure the plugins.
<br><br>
See [Trying Vituum Online](/guide/#trying-vituum-online) for various examples of template engines
<br><br>
::: warning
Most of the plugins are still experimental and feedback is welcome. If you experience any problems or if you're missing any additional settings for the template engines add issue on GitHub.
:::

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
npm i @vituum/posthtml --save-dev
```
**yarn**
```bash
yarn add @vituum/posthtml -D
```
For use outside **Vituum** as **Vite** plugin use `@vituum/vite-plugin-posthtml`

### Config
```javascript
import { defineConfig } from 'vituum'
import posthtml from '@vituum/posthtml'

export default defineConfig({
    integrations: [posthtml()]
})
```

See [@vituum/posthtml](/config/integrations-options#templates-posthtml) to learn more about config options

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
npm i @vituum/twig --save-dev
```
**yarn**
```bash
yarn add @vituum/twig -D
```
For use outside **Vituum** as **Vite** plugin use `@vituum/vite-plugin-twig`

### Config
```javascript
import { defineConfig } from 'vituum'
import twig from '@vituum/twig'

export default defineConfig({
    integrations: [twig()]
})
```

See [@vituum/twig](/config/integrations-options#templates-twig) to learn more about config options

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
npm i @vituum/latte --save-dev
```
**yarn**
```bash
yarn add @vituum/latte -D
```
For use outside **Vituum** as **Vite** plugin use `@vituum/vite-plugin-latte`

### Config
```javascript
import { defineConfig } from 'vituum'
import latte from '@vituum/latte'

export default defineConfig({
    integrations: [latte()]
})
```

See [@vituum/latte](/config/integrations-options#templates-latte) to learn more about config options

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
npm i @vituum/liquid --save-dev
```
**yarn**
```bash
yarn add @vituum/liquid -D
```
For use outside **Vituum** as **Vite** plugin use `@vituum/vite-plugin-liquid`

### Config
```javascript
import { defineConfig } from 'vituum'
import liquid from '@vituum/liquid'

export default defineConfig({
    integrations: [liquid()]
})
```

See [@vituum/liquid](/config/integrations-options#templates-liquid) to learn more about config options

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
npm i @vituum/nunjucks --save-dev
```
**yarn**
```bash
yarn add @vituum/nunjucks -D
```
For use outside **Vituum** as **Vite** plugin use `@vituum/vite-plugin-nunjucks`

### Config
```javascript
import { defineConfig } from 'vituum'
import nunjucks from '@vituum/nunjucks'

export default defineConfig({
    integrations: [nunjucks()]
})
```

See [templates.nunjucks](/config/integrations-options#templates-nunjucks) to learn more about config options

## Pug _([@vituum/vite-plugin-pug](https://github.com/vituum/vite-plugin-pug))(coming soon)_

```pug
ul(id='navigation')
  each item in ['Home', 'About']
    li= item
```

See [docs](https://pugjs.org) for more info about the syntax

## Handlebars _([@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars))(coming soon)_
```handlebars
```twig
<ul id="navigation">
    {{#each item as |navigation|}}
        <li>{{ item }}</li>
    {{/each}}
</ul>
```

See [docs](https://handlebarsjs.com/) for more info about the syntax

## Create your own plugin

Vituum can be used with any template engine plugin, the only requirement is that the plugin supports file ext-names such as following (twig as example)
* `.json.html` - for defining a page with data, `template` param is used to load default template file
* `.twig.html` - classic template engine syntax
* `.twig.json` - data for the template engine syntax

Supported ext-names can be changed via [config](/config/main-options#templates-formats)

Template engine syntax should be also possible to process in any `.html` file like this

```html
<script type="application/json" data-format="twig">
    {
        "template": "path/to/template",
        "title": "Hello nested"
    }
</script>
```

You can also create **Vituum** integration with predefined options via [Integrations API](/guide/integrations)
