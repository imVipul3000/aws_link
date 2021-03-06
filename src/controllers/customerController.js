const controller = {};
const path = require('path');
const express = require('express');
const app = express();

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save1 = (req, res) => {
    console.log("its comming here.....")
    const data = req.body;
    req.getConnection((err, connection) => {
        console.log("its comming here.....")
        const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
            console.log(customer);
            console.log("its comming here.....")
            res.redirect('/study');
        })
    })
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO contact set ?', data, (err, contact) => {
            console.log(contact);
            res.redirect('/contact');
        })
    })
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
            res.render('customers_edit', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/study');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/study');
        });
    });
};

controller.home = (req, res) => {
    res.sendFile('./htmls/home.html', { root: __dirname });
};

controller.contact = (req, res) => {
    res.sendFile('./htmls/contact.html', { root: __dirname });
};

controller.viewz = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, view1) => {
            if (err) {
                res.json(err);
            }
            res.render('view1', {
                data: view1
            });
        });
    });
};

controller.message = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contact', (err, contact) => {
            if (err) {
                res.json(err);
            }
            res.render('contact', {
                data: contact
            });
        });
    });
};
module.exports = controller;
