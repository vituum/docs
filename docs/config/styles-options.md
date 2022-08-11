# Styles Options

## styles.tailwindcss

- **Type:** `boolean`
- **Default:** `false`

Whenever to use tailwind css or not

## styles.postcss

- **Type:** `string | (postcss.ProcessOptions & { plugins?: postcss.AcceptedPlugin[] })`

Inline PostCSS config or a custom directory to search PostCSS config from (default is project root).

See [Vite css.postcss](https://vitejs.dev/config/shared-options.html#css-postcss) for more details.

## styles.juice.paths

- **Type:** `string[]`
- **Default:** `['emails']`

Paths in which html files will be processed with [Juice](https://github.com/Automattic/juice)

## styles.juice.options

- **Type:** `object`
- **Default:** `{}`

Additional options for [Juice](https://github.com/Automattic/juice)
