const express = require('express');
const mongoose = require('mongoose');
const { connectDb } = require('./helpers/db');
const { port, host, db } = require('./configuration');

const app = express()


const postScema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postScema);



const startServer = () => {
    app.listen(port, () => {
        console.log(`Started API Service ${port}`)
        console.log(`HOST on - ${host}`)
        console.log(`MONGO_DB on - ${db}`)

        const silence = new Post({ name: 'Silence' });
        silence.save((err, savedSilence) => {
            console.log('sielence-volume', savedSilence)
        });
    })
}

// console.log(process.env.PORT)

app.get('/test', (req, res) => {
    res.send('Our api server - working correctly! - volumes')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
