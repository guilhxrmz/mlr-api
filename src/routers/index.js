const express = require('express');
const router = express.Router();
const mlr = require('../controllers/mlr');

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});
router.get('/post-mlr', mlr.getnumber);
module.exports = router;
