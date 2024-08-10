const express = require('express');
const app = express();
const db = require('./db');
const port = 6001;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res) => {
    res.send('ok')
})

const AuthController = require('./controller/AuthController');
app.use('/api/auth',AuthController);

app.listen(port,(err) => {
    console.log(err)
    console.log(`Listing on port ${port}`)
})