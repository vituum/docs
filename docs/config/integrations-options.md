# Integrations Options

See [Integrations API](/guide/integrations) to learn more about this section.

## integrations

- **Type:** `(Integration | Integration[])[]`

Array of integrations to use. Integration should be function returning object or object. All available options to official integrations can be found on this page.

## [@vituum/tailwind](https://www.npmjs.com/package/@vituum/tailwind)

- **Type:** `object`
- **Default:** `{}`

Optional inline TailwindCSS config. You can use either `tailwind.config.cjs` or inline config here, see more about TailwindCSS configuration [here](https://tailwindcss.com/docs/configuration).

## [@vituum/juice](https://www.npmjs.com/package/@vituum/juice)

### paths

- **Type:** `string[]`
- **Default:** `['emails']`

Paths in which html files will be processed with [Juice](https://github.com/Automattic/juice)

### tables

- **Type:** `boolean`
- **Default:** `true`

Whenever to add default attributes `border="0" cellpadding="0" cellspacing="0"` to every table.

### options

- **Type:** `object`
- **Default:** `{}`

Additional options for Juice. Learn more about Juice options [here](https://github.com/Automattic/juice#options).

### send.template

- **Type:** `string`
- **Default:** `null`

Path to template to use for sending a test email. Should be already built html file.

### send.from

- **Type:** `string`
- **Default:** `example@example.com`

Email address from which the email will be sent.

### send.to

- **Type:** `string`
- **Default:** `null`

Email address to which the email will be sent.

### send.host

- **Type:** `string`
- **Default:** `null`

SMTP Host from to send, you can also use `VITUUM_SMTP_HOST` in `.env` file.

### send.user

- **Type:** `string`
- **Default:** `null`

SMTP User from to send, you can also use `VITUUM_SMTP_USER` in `.env` file.

### send.pass

- **Type:** `string`
- **Default:** `null`

SMTP Password from to send, you can also use `VITUUM_SMTP_PASS` in `.env` file.

## [@vituum/posthtml](https://www.npmjs.com/package/@vituum/posthtml)

### plugins
- **Type:** `(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]`
- **Default:** `[]`

Additional PostHTML plugins to use. See PostHTML [GitHub](https://github.com/posthtml) for list of all official plugins.

### options
- **Type:** `object`
- **Default:** `{}`

Additional PostHTML options to use. See PostHTML [options](https://posthtml.org/#/core?id=posthtml-options) for more info.

## [@vituum/twig](https://www.npmjs.com/package/@vituum/twig)

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `twig` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#filters) for more info.

### functions
- **Type:** `object`
- **Default:** `{}`

Object of named functions to use, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js#functions) for more info.

### extensions
- **Type:** `function[]`
- **Default:** `[]`

Array of functions that extend TwigJS with custom tag, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki/Extending-twig.js-With-Custom-Tags) for more info.

### namespaces
- **Type:** `object`
- **Default:** `{}`

Object defining namespaces, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki#namespaces) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.
```javascript
{
    html: config.templates.format === 'twig' ? /.(json|json.html|twig.json|twig.json.html|twig|twig.html)$/ : /.(twig.json|twig.json.html|twig|twig.html)$/,
    json: /.(json.twig|json.twig.html)$/
}
```

### twig.compileOptions
- **Type:** `object`
- **Default:** `{}`

Additional TwigJS compileOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info. It's not well documented.

### twig.renderOptions
- **Type:** `object`
- **Default:** `{}`

Additional TwigJS renderOptions, see TwigJS [wiki](https://github.com/twigjs/twig.js/wiki) for more info. It's not well documented.

## [@vituum/latte](https://www.npmjs.com/package/@vituum/latte)

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filters to use. Can be function or string providing path to `.php` file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-filters).

### functions
- **Type:** `object`
- **Default:** `{}`

Object of named functions to use. Can be function or string providing path to `.php` file. See examples [here](https://github.com/vituum/vite-plugin-latte/tree/main/latte) or official docs [here](https://latte.nette.org/en/extending-latte#toc-functions).

### tags
- **Type:** `function[]`
- **Default:** `[]`

Object of named tags to use. Only a string providing path to `.php` file. See official docs [here](https://latte.nette.org/en/extending-latte#toc-tags).

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.
```javascript
{
    html: config.templates.format === 'latte' ? /.(json|json.html|latte.json|latte.json.html|latte|latte.html)$/ : /.(latte.json|latte.json.html|latte|latte.html)$/,
    json: /.(json.latte|json.latte.html)$/
}
```

## [@vituum/liquid](https://www.npmjs.com/package/@vituum/liquid)

### reload
- **Type:** `boolean` or `function`
- **Default:** `true`

Whenever to auto-reload browser window upon `html`, `liquid` or `json` file change. You can provide function to filter upon which file a reload should occur.

### root
- **Type:** `string`
- **Default:** `null`

Root is inherited from Vite `root` by default. For example, you can change this to `resolve(process.cwd(), 'src/templates')`, then you can use includes with paths defaulting to this directory.

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Filters) for more info.

### tags
- **Type:** `function[]`
- **Default:** `[]`

Array of functions that extend LiquidJS with custom tag, see LiquidJS [docs](https://liquidjs.com/tutorials/register-filters-tags.html#Register-Tags) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: config.templates.format === 'liquid' ? /.(json|json.html|liquid.json|liquid.json.html|liquid|liquid.html)$/ : /.(liquid.json|liquid.json.html|liquid|liquid.html)$/,
    json: /.(json.liquid|json.liquid.html)$/
}
```

## [@vituum/nunjucks](https://www.npmjs.com/package/@vituum/nunjucks)

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-filters) for more info.

### extensions
- **Type:** `object`
- **Default:** `{}`

Object of named extensions to use, see Nunjucks [docs](https://mozilla.github.io/nunjucks/api.html#custom-tags) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: (config.templates.format === 'njk' || config.templates.format === 'nunjucks') ? /.(json|json.html|njk.json|njk.json.html|njk|njk.html)$/ : /.(njk.json|njk.json.html|njk|njk.html)$/,
    json: /.(json.njk|json.njk.html)$/
}
```

## [@vituum/pug](https://www.npmjs.com/package/@vituum/pug)

### filters
- **Type:** `object`
- **Default:** `{}`

Object of named filter functions to use, see Pug [docs](https://pugjs.org/language/filters.html#custom-filters) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: config.templates.format === 'pug' ? /.(json|json.html|pug.json|pug.json.html|pug|pug.html)$/ : /.(pug.json|pug.json.html|pug|pug.html)$/,
    json: /.(json.pug|json.pug.html)$/
}
```

### compileOptions
- **Type:** `object`
- **Default:** `{}`

Additional Pug options, see Pug [docs](https://pugjs.org/api/reference.html) for more info.

## [@vituum/handlebars](https://www.npmjs.com/package/@vituum/handlebars)

### helpers
- **Type:** `object`
- **Default:** `{}`

Object of named helper functions to use, see Handlebars [docs](https://handlebarsjs.com/api-reference/helpers.html) for more info.

### data
- **Type:** `string`
- **Default:** `''`

Path to additional data provided with json file. Can be a file, or a glob like this `/path/to/*.jsom`.

### globals
- **Type:** `object`
- **Default:** `{}`

Other global data to use. Can be `object` or `function` returning object, or combination of both.

### partials.directory
- **Type:** `string`
- **Default:** `null`

Root directory for partials. Directory is inherited from Vite `root` by default.

### partials.extname
- **Type:** `boolean`
- **Default:** `true`

Whenever to use ext-name in partial path like this `"path/to/partial.hbs`

### filetypes
- **Type:** `object`

Which type of ext-names should be processed by the plugin.

For example, this is by default in **Vituum**.

```javascript
{
    html: config.templates.format === 'hbs' ? /.(json|json.html|hbs.json|hbs.json.html|hbs|hbs.html)$/ : /.(hbs.json|hbs.json.html|hbs|hbs.html)$/,
    json: /.(json.hbs|json.hbs.html)$/
}
```

### compileOptions
- **Type:** `object`
- **Default:** `{}`

Additional Handlebars compileOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/compilation.html) for more info. Not well documented actually.

### runtimeOptions
- **Type:** `object`
- **Default:** `{}`

Additional Handlebars runtimeOptions, see Handlebars [docs](https://handlebarsjs.com/api-reference/runtime-options.html) for more info. Not well documented actually.
