var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// SIGN IN
router.get('/:id', getOnePlayer);

function getOnePlayer (req, res, next) {
    res.json({data: 'player data returned here'});
}

// EDIT SAVED CITIES
router.put('/:id', putOnePlayer);
function putOnePlayer (req, res, next) {
  res.json({data: 'player stats edited successfully message'});
}

module.exports = router;
