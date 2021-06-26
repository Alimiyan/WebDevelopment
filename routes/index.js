var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const name = ['apple', 'mango', 'banana', 'cherry'] 
  const person = {name: "Alimiyan", comments:{comment: "sample comment", date: "01-01,2021"}}
  const user = {name: 'Alimiyan', admin:true}
  res.render('index', { user, person });

});

module.exports = router;
