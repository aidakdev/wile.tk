import express from 'express'
import pages from '../src/meta'

const app = express();

(async () => {
    for (const page of pages) {
        const { default: pageContent } =
            await import(`../src/pages/${page.file}`)

        app.get(page.path, (_, res) => res.send(pageContent))
    }

    app.listen(3000)
    console.log('💬: dev preview listening on http://localhost:3000')
})()