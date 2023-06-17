# Send
_[@vituum/vite-plugin-send](https://github.com/vituum/vite-plugin-send)_

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
