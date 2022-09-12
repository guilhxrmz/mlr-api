const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/:id', controller.get);
module.exports = router;
