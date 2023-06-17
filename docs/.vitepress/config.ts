import { defineConfig } from 'vitepress'

const ogDescription = 'Fast prototyping with template engines and integrated frontend tools'
const ogImage = 'https://vituum.dev/og-image.png'
const ogTitle = 'Vituum'
const ogUrl = 'https://vituum.dev'

export default defineConfig({
  title: `Vituum`,
  description: 'Fast prototyping with template engines and integrated frontend tools',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@newlogicdigital' }],
    ['meta', { name: 'theme-color', content: '#2d55ff' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vituum/docs/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vituum/vituum' },
      { icon: 'twitter', link: 'https://twitter.com/vituum_dev' }
    ],

    algolia: {
      appId: 'VB79JXJIAA',
      apiKey: 'a7c609cdca4e22d1249ab92a68d1d5ed',
      indexName: 'vituum'
    },

    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2022-present lubomirblazek.cz, newlogic.cz & Vituum Contributors'
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      { text: 'Config', link: '/config/', activeMatch: '/config/' },
      {
        text: 'Resources',
        items: [
          {
            items: [
              {
                text: 'Vite',
                link: 'https://vitejs.dev'
              },
              {
                text: 'Changelog',
                link: 'https://github.com/vituum/vituum/blob/main/CHANGELOG.md'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'Features',
              link: '/guide/features'
            },
            {
              text: 'Template Engines',
              link: '/guide/template-engines'
            },
            {
              text: 'Email Templates',
              link: '/guide/email-templates'
            }
          ]
        }
      ],
      '/plugins/': [
        {
          text: 'Plugins',
          items: [
            {
              text: 'Internal',
              items: [
                {
                  text: 'Pages',
                  link: '/plugins/pages'
                },
                {
                  text: 'Imports',
                  link: '/plugins/imports'
                }
              ]
            },
            {
              text: 'Common',
              items: [
                {
                  text: 'TailwindCSS',
                  link: '/plugins/tailwindcss'
                },
                {
                  text: 'PostCSS',
                  link: '/plugins/postcss'
                },
                {
                  text: 'PostHTML',
                  link: '/plugins/posthtml'
                },
                {
                  text: 'Juice',
                  link: '/plugins/juice'
                },
                {
                  text: 'Send',
                  link: '/plugins/send'
                }
              ]
            },
            {
              text: 'Template Engines',
              items: [
                {
                  text: 'Liquid',
                  link: '/plugins/liquid'
                },
                {
                  text: 'Twig',
                  link: '/plugins/twig'
                },
                {
                  text: 'Latte',
                  link: '/plugins/latte'
                },
                {
                  text: 'Nunjucks',
                  link: '/plugins/nunjucks'
                },
                {
                  text: 'Pug',
                  link: '/plugins/pug'
                },
                {
                  text: 'Handlebars',
                  link: '/plugins/handlebars'
                }
              ]
            }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          items: [
            {
              text: 'Configuring Vituum',
              link: '/config/'
            },
            {
              text: 'Main',
              link: '/config/main-options'
            }
          ]
        }
      ]
    }
  }
})
