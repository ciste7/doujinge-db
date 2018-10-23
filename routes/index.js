const express = require('express');
const router = express.Router();


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// *                                                        * General Init * //
const website_name = 'Doujinge DB';


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// *                                                             * Routing * //
router.get('/', function(req, res, next) {
  res.render('index', { title: website_name });
});


module.exports = router;
