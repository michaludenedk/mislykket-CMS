//Importere express 
let express = require('express');
// call express 
let app = express();

//require express-formidable
let formidable = require('express-formidable');

//formidable
app.use(formidable());


//sende statiske elementer som Billeder osv. 
app.use(express.static('public'));


//kontrollere serveren med handler functions som f.eks GET.
app.get('/', function (req, res) {
        res.send('Nu sker der noget');
});


app.get('/is', function (req, res) {

    res.send('test test is');
});


//Hvilken port der er døren til os
app.listen(3000, function () {
    console.log('Server lytter og er klar til at modtage forsørgelser');
}); 




app.post('/create-post', function (req, res) {
    req.body
    console.log('/create-post')
    console.log(req.fields);
});