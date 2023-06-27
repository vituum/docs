# Plugins
Here are some official **Vituum** plugins for Vite!

## Internal Plugins

These are internal plugins that are part of Vituum, they can be used separately too.

* [@vituum/vite-plugin-pages](/plugins/pages)
* [@vituum/vite-plugin-imports](/plugins/imports)

## Common Plugins

Other common plugins can be used to enhance Vite functionality and can also be used separately without Vituum in any Vite project.

* [@vituum/vite-plugin-tailwindcss](/plugins/tailwindcss)
* [@vituum/vite-plugin-postcss](/plugins/postcss)
* [@vituum/vite-plugin-posthtml](/plugins/posthtml)
* [@vituum/vite-plugin-juice](/plugins/juice)
* [@vituum/vite-plugin-send](/plugins/send)

## Template Engines Plugins

And lastly there are [Template Engines](/guide/template-engines) plugins, these are meant to be primary used with Vituum to get full functionality. 

You can use them separately without Vituum too, but you would have to manually define each file in `build.rollupOptions.input`, since there is no multi-page support.  

* [@vituum/vite-plugin-liquid](/plugins/liquid)
* [@vituum/vite-plugin-twig](/plugins/twig)
* [@vituum/vite-plugin-latte](/plugins/latte)
* [@vituum/vite-plugin-nunjucks](/plugins/nunjucks)
* [@vituum/vite-plugin-pug](/plugins/pug)
* [@vituum/vite-plugin-handlebars](/plugins/handlebars)
