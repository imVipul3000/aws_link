const router = require('express').Router();
const express = require('express');
const customerController = require('../controllers/customerController');

router.get('/', customerController.home);
router.get('/contact', customerController.contact);
router.get('/study', customerController.list);
router.get('/study1', customerController.viewz);
router.get('/mssg', customerController.message);
router.post('/add1', customerController.save1);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;
