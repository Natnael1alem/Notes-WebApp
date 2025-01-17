require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

//use static files
app.use(express.static('public'));

//templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//     const locals = {
//         title: "Notes",
//         description: "This is a node js note app that I created for practicing" 
//     }
//     res.render('index', locals);
// });


// Routes
app.use('/', require('./server/routes/index'));

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
