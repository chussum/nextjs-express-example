const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/post/list', (req, res) => {
            return app.render(req, res, '/post/list', req.query)
        })

        server.get('/post/:id', (req, res) => {
            req.query.id = req.params.id
            return app.render(req, res, '/post/view', req.query)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
