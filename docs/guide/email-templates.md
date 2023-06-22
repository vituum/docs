# Email Templates

To start writing email templates in Vite, you should start by adding following plugins in your `vite.config.js`, for templates in this example we use [PostHTML](/plugins/posthtml), but you can use any [Template Engine](/guide/template-engines) you want.

```javascript
import vituum from 'vituum'
import postcss from '@vituum/vite-plugin-postcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'

export default {
    plugins: [
        vituum(),
        postcss(),
        posthtml({
            root: './src/emails'
        }),
        juice(),
        send()
    ]
}
```

Now add your `index.html` to `/src/pages/email`

```html
<!-- index.html -->
<extends src="layouts/main.html">
    <block name="body">
        <include src="components/button.html"></include>
    </block>
</extends>
```

And your `layout.html` should look like this.

```html
<!-- src/emails/layouts/main.html -->
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import "/src/emails/main.css";
        </style>
    </head>
    <body>
    <table>
        <tr>
            <td>Vituum Emails</td>
        </tr>
        <tr>
            <td>
                <block name="body" with="locals"></block>
            </td>
        </tr>
    </table>
    </body>
</html>

```

Now since we're using [@vituum/vite-plugin-postcss](/plugins/postcss), we can use modern syntax in `/src/emails/main.css`. You can even add TailwindCSS here. 

All CSS will be inlined into `html` via `Juice`. You can write your emails much easier, use modern syntax, split your email into components etc. 

Lastly, if you want to test your email, add an `.env` file to your project with env variables for [@vituum/vite-plugin-send](/plugins/send). After that you can add `?send` in your browser URL and test email will be sent to you. We also recommend upload your images somewhere, so they can be loaded in your email.


Find full example of using Vituum with Juice on [Trying Vituum Online](/guide/#trying-vituum-online).
