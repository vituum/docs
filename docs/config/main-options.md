# Main Options

These are the main **Vituum** options that can be used in the main plugin.

## pages.dir

- **Type:** `string`
- **Default:** `src/pages`

Directory where your `.html` or template engine page files are located. Requests are auto-redirected in this directory.

## pages.formats

- **Type:** `string[]`
- **Default:** `['json', 'latte', 'twig', 'liquid', 'njk', 'hbs', 'pug']`

Supported template engines that will be resolved in middleware with vite dev server.

## pages.ignoredPaths

- **Type:** `string[]`
- **Default:** `['src/emails']`

Use this option if you want to access `.html` or template engine page files also in different directory relative to `root` that is outside the `views` directory.

## imports.paths

- **Type:** `string[]`
- **Default:** `['./src/styles/**', './src/scripts/**']`

Paths where auto-imports should be resolved.


## imports.extnamePattern.styles

- **Type:** `RegExp`
- **Default:** `/.(css|less|scss|pcss)$/`

Types of files that should be resolved as styles

## imports.extnamePattern.scripts

- **Type:** `RegExp`
- **Default:** `/.(js|mjs|ts)$/`

Types of files that should be resolved as scripts

## imports.filenamePattern

- **Type:** `object`
- **Default:** `{'+.css': 'src/styles', '+.js': 'src/scripts'}`

Filename for file with imports and the paths where it should be processed. Path can be also array of paths.
