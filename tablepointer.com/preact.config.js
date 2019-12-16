const netlifyPlugin = require('preact-cli-plugin-netlify')

export default function (config) {
    netlifyPlugin(config, {
        redirects: [
            '/*    /index.html   200',
        ]
    })
}