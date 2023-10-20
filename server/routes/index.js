/**
 */
const _       = require('lodash'),
      express = require('express');

const pkg  = require("../../package");

const router = express.Router();

/**
 * Version
 */
router.get('/', async function(req, res) {
    return res.status(201).send({version: pkg.version}).end();
});

module.exports = router;