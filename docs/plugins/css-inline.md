# CSS Inline
_[@vituum/vite-plugin-css-inline](https://www.npmjs.com/package/@vituum/vite-plugin-css-inline)_

Adds support for inlining your `css` files to `html`.<br>
It's handy for creating email templates. Learn more about that [here](/guide/features#email-templates).

See library [docs](https://github.com/Stranger6667/css-inline/tree/master/bindings/javascript) for more info about **css-inline**.

> This is a faster alternative to [Juice](/plugins/juice)

## Install
**npm**
```bash
npm i @vituum/vite-plugin-css-inline --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-css-inline -D
```

## Config
```javascript
import cssInline from '@vituum/vite-plugin-css-inline'

export default {
    plugins: [cssInline()]
}
```

## Options

### paths

- **Type:** `string[]`
- **Default:** `['src/pages/email']`

Paths in which `html` files should be processed with [Juice](https://github.com/Automattic/juice)

### tables

- **Type:** `boolean`
- **Default:** `true`

Whenever to add default attributes `border="0" cellpadding="0" cellspacing="0"` to every table.

### doctype

- **Type:** `string`
- **Default:** `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

Default doctype to use, replaces `<!DOCTYPE html>` from your `.html` with your doctype to use in emails.

### postcss.customProperties

- **Type:** `pluginOptions`
- **Default:** `{ preserve: false }`

See all options [here](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties)

### postcss.processOptions

- **Type:** `ProcessOptions`
- **Default:** `undefined`

See all options [here](https://postcss.org/api/#processor-process)

### postcss.plugins

- **Type:** `ProcessOptions`
- **Default:** `undefined`

Here you can add additional [PostCSS plugins](https://github.com/postcss/postcss-load-config/blob/main/README.md#array).

### options

- **Type:** `Object`
- **Default:** `{}`

Additional options for Juice. Learn more about Juice options [here](https://github.com/Stranger6667/css-inline/tree/master/bindings/javascript#configuration).
