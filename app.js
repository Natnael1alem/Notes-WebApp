require('dotenv').config(); // use the .env file

const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = process.env.PORT;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    // cookie: {maxAge: new Date (Date.now() + (3600000))}
}));

app.use(passport.initialize()); // passport for authentication
app.use(passport.session());

app.use(express.urlencoded({extended: true})) // make it url encoded
app.use(express.json());
app.use(express.static('public')); // use static files

// layout templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

connectDB(); //connect to database

// app.get('/', function(req, res){
//     const locals = {
//         title: "Notes",
//         description: "This is a node js note app that I created for practicing" 
//     }
//     res.render('index', locals);
// });

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/auth'));

//Hadle 404
app.get('*', function(req, res) {
    res.status(404).render('404');
})

// The port that listens
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
