# Main Options

These are the main **Vituum** options that can be used in the main plugin.

## input

- **Type:** `string[]`
- **Default:** `['./src/styles/*.{css,pcss,scss,sass,less,styl,stylus}', './src/scripts/*.{js,ts,mjs}']`

Additional paths that are added in `build.rollupOptions.input`, change this mainly if you want to change paths for you styles and scripts or to add other paths for templates.

Default paths for `build.rollupOptions.input` are following, so if you want to change them completely, change them in `build.rollupOptions.input`.
```javascript
// build.rollupOptions.input
[
    './src/emails/*.{json,latte,twig,liquid,njk,hbs,pug,html}',
    './src/pages/**/*.{json,latte,twig,liquid,njk,hbs,pug,html}',
    '!./src/pages/**/*.{latte,twig,liquid,njk,hbs,pug,html}.json'
]
```

## formats

- **Type:** `string[]`
- **Default:** `'./src'`

Determines which extname formats are supported inside `build.rollupOptions.input` and renamed to `.html`.

## pages

See [Pages Plugin](/plugins/pages) for more info about options.


## imports

See [Imports Plugin](/plugins/imports) for more info about options.
