# Send
_[@vituum/vite-plugin-send](https://github.com/vituum/vite-plugin-send)_

Can be used for sending test email from `html` file.

If you add `?send` to your URL, an email of current page will be sent to your user defined email address. Don't forget to remove the get parameter when you make changes to your files, or you will constantly get new emails with updated content.

You can also use send function separately of Vite, it's exported under `@vituum/vite-plugin-send/send.js` and takes the same options as the plugin. You can use this to create npm script to run the function manually instead of get parameter. 

## Install
**npm**
```bash
npm i @vituum/vite-plugin-send --save-dev
```
**yarn**
```bash
yarn add @vituum/vite-plugin-send -D
```

## Config
```javascript
import send from '@vituum/vite-plugin-send'

export default {
    plugins: [send()]
}
```

## Options

### content

- **Type:** `string`
- **Default:** `null`

It's `html` content which should be sent via test email.

### filename

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_FILE || null`

Path to template to use for sending a test email. Should be already built `html` file.

### from

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_FROM || 'example@example.com'`

Email address from which the email should be sent. You can also use `VITUUM_SEND_FROM` in `.env` file.

### to

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_TO || null`

Email address to which the email should be sent. You can also use `VITUUM_SEND_TO` in `.env` file.

### host

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_HOST || null`

SMTP Host from to send, you can also use `VITUUM_SEND_HOST` in `.env` file.

### user

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_USER || null`

SMTP User from to send, you can also use `VITUUM_SEND_USER` in `.env` file.

### pass

- **Type:** `string`
- **Default:** `process.env.VITUUM_SEND_PASS || null`

SMTP Password from to send, you can also use `VITUUM_SEND_PASS` in `.env` file.
