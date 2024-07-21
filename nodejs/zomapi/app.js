let express = require('express');
let app = express();
let port = 9110;
let cors = require('cors');

app.use(cors())

app.get('/',(req,res) => {
    res.send('Hii From Express')
});

app.get('/location',(req,res) => {
    res.send('Hii From location')
})

app.get('/quickSearch',(req,res) => {
    res.send('quickSearch Route')
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

