# Template Options

See [Integrations API](/guide/integrations) to learn more about this section.

## integrations

- **Type:** `(Integration | Integration[])[]`

Array of integrations to use. 

## [@vituum/tailwind](https://www.npmjs.com/package/@vituum/tailwind)

- **Type:** `object`
- **Default:** `{}`

Inline TailwindCSS config

## [@vituum/juice](https://www.npmjs.com/package/@vituum/juice)

### paths

- **Type:** `string[]`
- **Default:** `['emails']`

Paths in which html files will be processed with [Juice](https://github.com/Automattic/juice)

### tables

- **Type:** `boolean`
- **Default:** `true`

Whenever to add default attributes `border="0" cellpadding="0" cellspacing="0"` to every table 

### options

- **Type:** `object`
- **Default:** `{}`

Additional options for [Juice](https://github.com/Automattic/juice)

### send.template

- **Type:** `string`
- **Default:** `null`

Template to use for sending of a test email

### send.from

- **Type:** `string`
- **Default:** `example@example.com`

Email address from which the email will be send

### send.to

- **Type:** `string`
- **Default:** `null`

Email address to which the email will be send

### send.host

- **Type:** `string`
- **Default:** `null`

SMTP Host from to send, you can also use `VITUUM_SMTP_HOST` in `.env` file

### send.user

- **Type:** `string`
- **Default:** `null`

SMTP User from to send, you can also use `VITUUM_SMTP_USER` in `.env` file

### send.pass

- **Type:** `string`
- **Default:** `null`

SMTP Password from to send, you can also use `VITUUM_SMTP_PASS` in `.env` file

## [@vituum/posthtml](https://www.npmjs.com/package/@vituum/posthtml)

### plugins
- **Type:** `(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]`
- **Default:** `[]`

### options
- **Type:** `object`
- **Default:** `{}`

## [@vituum/twig](https://www.npmjs.com/package/@vituum/twig)

### filters
- **Type:** `object`
- **Default:** `{}`

### functions
- **Type:** `object`
- **Default:** `{}`

### extensions
- **Type:** `function[]`
- **Default:** `[]`

### namespaces
- **Type:** `object`
- **Default:** `{}`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### filetypes
- **Type:** `object`

## [@vituum/latte](https://www.npmjs.com/package/@vituum/latte)

### filters
- **Type:** `object`
- **Default:** `{}`

### functions
- **Type:** `object`
- **Default:** `{}`

### tags
- **Type:** `function[]`
- **Default:** `[]`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### filetypes
- **Type:** `object`

## [@vituum/liquid](https://www.npmjs.com/package/@vituum/liquid)

### filters
- **Type:** `object`
- **Default:** `{}`

### tags
- **Type:** `function[]`
- **Default:** `[]`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### filetypes
- **Type:** `object`

## [@vituum/nunjucks](https://www.npmjs.com/package/@vituum/nunjucks)

### filters
- **Type:** `object`
- **Default:** `{}`

### functions
- **Type:** `object`
- **Default:** `{}`

### extensions
- **Type:** `function[]`
- **Default:** `[]`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### filetypes
- **Type:** `object`

## [@vituum/pug](https://www.npmjs.com/package/@vituum/pug)

### filters
- **Type:** `object`
- **Default:** `{}`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### filetypes
- **Type:** `object`

### compileOptions
- **Type:** `object`
- **Default:** `{}`

## [@vituum/handlebars](https://www.npmjs.com/package/@vituum/handlebars)

### helpers
- **Type:** `object`
- **Default:** `{}`

### data
- **Type:** `string`
- **Default:** `''`

### globals
- **Type:** `object`
- **Default:** `{}`

### partials.directory
- **Type:** `string`
- **Default:** `null`

### partials.extname
- **Type:** `boolean`
- **Default:** `true`

### filetypes
- **Type:** `object`

### compileOptions
- **Type:** `object`
- **Default:** `{}`

### runtimeOptions
- **Type:** `object`
- **Default:** `{}`
