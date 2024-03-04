const express = require('express');
const formController = require('../controller/formController');

const router = express.Router();

// read - get
router.get('/', formController.readForm);

module.exports = router;