const express = require('express');
const router = express.Router();
const { addNewGame } = require('../controllers/game');

router
    .route('/newGame')
    .post(addNewGame);

module.exports = router;