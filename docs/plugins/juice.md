# Juice
_[@vituum/vite-plugin-juice](https://www.npmjs.com/package/@vituum/vite-plugin-juice)_

Adds support for inlining of your `css` files to `html`.<br>
It's handy for creating email templates. Learn more about that [here](/guide/features#%E2%9C%89%EF%B8%8F-emails).

See [docs](https://github.com/Automattic/juice) for more info about **Juice**.

## Install
**npm**
```bash
npm i @vituum/vite-plugin-juice --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-juice -D
```

## Config
```javascript
import { defineConfig } from 'vituum'
import juice from '@vituum/vite-plugin-juice'

export default defineConfig({
    integrations: [juice()]
})
```

## Options

### paths

- **Type:** `string[]`
- **Default:** `['emails']`

Paths in which html files will be processed with [Juice](https://github.com/Automattic/juice)

### tables

- **Type:** `boolean`
- **Default:** `true`

Whenever to add default attributes `border="0" cellpadding="0" cellspacing="0"` to every table.

### doctype

- **Type:** `string`
- **Default:** `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

Default doctype to use, replaces `<!DOCTYPE html>` from your `.html` with your doctype to use in emails.

### juice

- **Type:** `object`
- **Default:** `{}`

Additional options for Juice. Learn more about Juice options [here](https://github.com/Automattic/juice#options).

See [@vituum/vite-plugin-juice](/config/plugins-options#vituum-juice) to learn more about config options
