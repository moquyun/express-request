var express = require('express');
var router = express.Router();
var request = require('request');

//
let requestData = '';
let url = `https://m.mi.com/v1/miproduct/view`;

// responsebody = request({
//   url: url,
//   method: 'POST',
//   json: true,
//   headers: {
//     'content-type': 'application/json',
//     'Referer': 'https://m.mi.com/',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: 'commodity_id=10000117',//JSON.stringify(requestData),
// }, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     // return body
//     console.log(body)
//   }else{
//     console.log(error)
//   }
// })
// end
/* GET users listing. */
router.get('/', function(req, res, next) {
  let goodsId = req.query.id
  let PostData = 'commodity_id=' + goodsId //'commodity_id=10000117'
  responsebody = request({
    url: url,
    method: 'POST',
    // json: true,
    headers: {
      'content-type': 'application/json',
      'Referer': 'https://m.mi.com/',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: PostData,//JSON.stringify(requestData),
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }else{
      console.log(error)
    }
  })
  // res.send('api');
});

module.exports = router;
