const controller = {};
const path = require('path');
const express = require('express');
const app = express();

controller.send1 = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO contact set ?', data, (err, customer) => {
            console.log('data saved...');
            res.redirect('/contact');
        })
    })
};