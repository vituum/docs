# Plugins
Here are some official **Vituum** plugins for Vite!

## Pages
_internal @vituum plugin_

## Imports
_internal @vituum plugin_

## PostHTML
_[@vituum/vite-plugin-posthtml](https://github.com/vituum/vite-plugin-posthtml)_

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

See [@vituum/vite-plugin-posthtml](/config/plugins-options#templates-posthtml) to learn more about config options


## PostCSS 
_[@vituum/vite-plugin-postcss](https://www.npmjs.com/package/@vituum/vite-plugin-postcss)_

Adds more base **PostCSS** plugins to Vite.<br>
Includes `postcss-import`, `postcss-nesting`, `postcss-custom-media`, `autoprefixer`

Add more via Vite or PostCSS config. See [Vite docs](https://vitejs.dev/guide/features.html#postcss) for more info.

### Install
**npm**
```bash
npm i @vituum/vite-plugin-postcss --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-postcss -D
```

### Config
```javascript
import postcss from '@vituum/vite-plugin-postcss'

export default {
    plugins: [postcss()]
}
```

See [@vituum/vite-plugin-postcss](/config/plugins-options#vituum-postcss) to learn more about config options

## Tailwind 
_[@vituum/vite-plugin-tailwind](https://www.npmjs.com/package/@vituum/vite-plugin-tailwind)_

Adds out of the box support for **TailwindCSS** to your project. Including base **PostCSS** plugins from `@vituum/vite-plugin-postcss`

See [docs](https://tailwindcss.com/docs) for more info about **TailwindCSS**

### Install
**npm**
```bash
npm i @vituum/vite-plugin-tailwind --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-tailwind -D
```

### Config
```javascript
import tailwind from '@vituum/vite-plugin-tailwind'

export default {
    plugins: [tailwind()]
}
```

See [@vituum/vite-plugin-tailwind](/config/plugins-options#vituum-tailwind) to learn more about config options

## Juice 
_[@vituum/vite-plugin-juice](https://www.npmjs.com/package/@vituum/vite-plugin-juice)_

Adds support for inlining of your `css` files to `html`.<br>
It's handy for creating email templates. Learn more about that [here](/guide/features#%E2%9C%89%EF%B8%8F-emails).

See [docs](https://github.com/Automattic/juice) for more info about **Juice**.

### Install
**npm**
```bash
npm i @vituum/vite-plugin-juice --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-juice -D
```

### Config
```javascript
import { defineConfig } from 'vituum'
import juice from '@vituum/vite-plugin-juice'

export default defineConfig({
    integrations: [juice()]
})
```

See [@vituum/vite-plugin-juice](/config/plugins-options#vituum-juice) to learn more about config options

## Twig 
_[@vituum/vite-plugin-twig](https://github.com/vituum/vite-plugin-twig)_

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

See [@vituum/vite-plugin-twig](/config/plugins-options#templates-twig) to learn more about config options

## Latte 
_[@vituum/vite-plugin-latte](https://github.com/vituum/vite-plugin-latte)_

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

See [@vituum/vite-plugin-latte](/config/plugins-options#templates-latte) to learn more about config options

## Liquid 
_[@vituum/vite-plugin-liquid](https://github.com/vituum/vite-plugin-liquid)_

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

See [@vituum/vite-plugin-liquid](/config/plugins-options#templates-liquid) to learn more about config options

## Nunjucks 
_[@vituum/vite-plugin-nunjucks](https://github.com/vituum/vite-plugin-nunjucks)_

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

See [@vituum/vite-plugin-nunjucks](/config/plugins-options#templates-nunjucks) to learn more about config options

## Pug 
_[@vituum/vite-plugin-pug](https://github.com/vituum/vite-plugin-pug)_

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

See [@vituum/vite-plugin-pug](/config/plugins-options#templates-pug) to learn more about config options

## Handlebars 
_[@vituum/vite-plugin-handlebars](https://github.com/vituum/vite-plugin-handlebars)_
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

See [@vituum/vite-plugin-handlebars](/config/plugins-options#templates-handlebars) to learn more about config options
