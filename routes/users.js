const express = require('express');
const router = express.Router();

/* GET sign-up page. */
router.get('/sign-up', function (req, res, next) {
  res.render('sign-up');
});

module.exports = router;
