var express = require('express');
var router = express.Router();
var Admin = require('../mongodb/model/Admin');
var db = require('../mongodb/');
// console.log(Admin)
/* GET home page. */
router.get('/', function(req, res, next) {
  db.find(Admin, {}, {_id: 0, __v: 0}).then(
    data => {
      console.log(JSON.stringify(data))
      res.send(JSON.stringify(data))
    }
  )
});

module.exports = router;
