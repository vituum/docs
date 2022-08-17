# Main Options

## input

- **Type:** `string[]`
- **Default:** `['./src/views/**/*.html', './src/emails/*.html', './src/styles/*.css', './src/scripts/*.js']`

Project files for build synced with `FastGlob`, in Vite it's `build.rollupOptions.input`

Change this to `['index.html']` if you are planning to use Vituum for a SPA app.

See [Vite rollupOptions](https://vitejs.dev/config/build-options.html#build-rollupoptions) for more details.

## output

- **Type:** `string[]`
- **Default:** `resolve(process.cwd(), 'public')`

Specify the output directory for build

## root

- **Type:** `string`
- **Default:** `resolve(process.cwd(), 'src')`

Project root directory (where `index.html` is located). Can be an absolute path, or a path relative to the current working directory.

See [Vite Project Root](https://vitejs.dev/guide/#index-html-and-project-root) for more details.

## plugins

- **Type:** `(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]`

Array of plugins to use. Falsy plugins are ignored and arrays of plugins are flattened. If a promise is returned, it would be resolved before running. See [Vite Plugin API](https://vitejs.dev/guide/api-plugin) for more details on Vite plugins.

## build.log

- **Type:** `boolean`
- **Default:** `false`

Whenever to show detailed log in `vituum build` command

## build.mode

- **Type:** `string`
- **Default:** `null || process.env.VITUUM_BUILD_MODE`

Build mode to use, possible options are:

* `headless` - to build all files, but without `.html`

## server.open

- **Type:** `boolean | string`

Automatically open the app in the browser on server start. See [Vite server.open](https://vitejs.dev/config/server-options.html#server-open) for more details.

## server.https

- **Type:** `boolean`
- **Default:** `false`

Whenever to use https, if you set `true` and you have cert file located in `~/.ssh` directory with the name `localhost-key.pem` and `localhost.pem` then https works out of the box.<br><br>
You can use [mkcert](https://github.com/FiloSottile/mkcert) to easily generate a valid local certificate file.

## server.cert

- **Type:** `string`
- **Default:** `localhost`

Certificate filename to use with `server.https`

## server.reload

- **Type:** `function`
- **Default:** `null`

You can add a custom filename filter to perform a full page refresh while you are running `vite dev` on any file you filter in the function

## imports.paths

- **Type:** `string[]`
- **Default:** `['./src/styles/**', './src/scripts/**']`


## imports.extnamePattern.styles

- **Type:** `RegExp`
- **Default:** `/.(css|less|scss|pcss)$/`

## imports.extnamePattern.scripts

- **Type:** `RegExp`
- **Default:** `/.(js|mjs|ts)$/`

## imports.filenamePattern

- **Type:** `object`
- **Default:** `{'+.css': 'src/styles', '+.js': 'src/scripts'}`

## middleware.viewsDir

- **Type:** `string`
- **Default:** `views`

## middleware.viewsIgnored

- **Type:** `string[]`
- **Default:** `['emails']`
