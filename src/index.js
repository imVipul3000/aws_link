const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql2'),
    myConnection = require('express-myconnection');
const app = express();


// importing routes
const customerRoutes = require('./routes/customer');
const customerController = require('../src/controllers/customerController');
const router = require('express').Router();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'ubuntu',
    password: 'Vipul@2123',
    port: 3306,
    database: 'nodejs2'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes

app.use('/', customerRoutes);
app.post("/send",function(req,res){
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO contact set ?', data, (err, contact) => {
            console.log(contact);
            res.redirect('/study1');
        })
    })
});


// static files
app.use(express.static(path.join(__dirname, 'public')));
// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
