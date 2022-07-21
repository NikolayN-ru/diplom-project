const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db } = require('./configuration');

const app = express()

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started Auth Service ${port}`)
        console.log(`HOST on - ${host}`)
        console.log(`MONGO_DB on - ${db}`)
    })
}

app.get('/auth', (req, res) => {
    res.send('Our api auth server - working correctly!')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
