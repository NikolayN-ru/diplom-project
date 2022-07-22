const express = require('express');
// const mongoose = require('mongoose');
// const axios = require('axios');
// const { connectDb } = require('./helpers/db');
const { port, host, db, authApiUrl } = require('./configuration');

const app = express()


// const postScema = new mongoose.Schema({
//     name: String
// });

// const Post = mongoose.model('Post', postScema);

// app.get('/posts', (req, res) => {
app.get('/apitest', (req, res) => {
    res.json({
        testingUser: true,
        currentUser: "Jak"
    })
})

app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
})


// const startServer = () => {
//     app.listen(port, () => {
//         console.log(`Started API Service ${port}`)
//         console.log(`HOST on - ${host}`)
//         console.log(`MONGO_DB on - ${db}`)

//         // const silence = new Post({ name: 'Silence' });
//         // silence.save((err, savedSilence) => {
//         //     console.log('sielence-volume', savedSilence)
//         // });
//     })
// }

// console.log(process.env.PORT)

// app.get('/test', (req, res) => {
    // axios.get(authApiUrl + '/apiuser').then(response => {

    // axios.get('http://backend:8000' + '/blog/api').then(response => {
    //     // console.log('django_URL', djangoUrl)
    //     console.log('response-data', response.data)
    // })

    // axios.get('http://auth:4001/apiuser').then(response => {
    //     console.log('AUTH', response.data)
    // })


//     axios.get(authApiUrl + '/apiuser').then(response => {
//         res.json({
//             testingUser: true,
//             currentUser: response.data
//         })
//     })

// })

// connectDb()
//     .on('error', console.log)
//     .on('disconnected', connectDb)
//     .once('open', startServer);

// startServer()