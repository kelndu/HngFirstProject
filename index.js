var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('resume');
})

app.post('/contact', (req, res)=>{
    res.send("Form Submitted Thanks");
})
var port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('Server is runing');
 })