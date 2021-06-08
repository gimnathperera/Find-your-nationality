const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const nationality = require('./nationality');
const security = require('./security');

router.get('/nationality/:name', auth, nationality.getNationality);
router.get('/token', security.getToken);

module.exports = router;
