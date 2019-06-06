var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.get('/', function(req, res, next) {
  let url = `https://m.smzdm.com/`;

  // let goodsId = req.query.id
  // let PostData = 'commodity_id=' + goodsId //'commodity_id=10000117'
  responsebody = request({
    url: url,
    method: 'GET',
    // json: true,
    headers: {
      'content-type': 'application/json',
      // 'Referer': 'https://m.mi.com/',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: '',//JSON.stringify(requestData),
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var regP = /<divclass="zm-card-title">(.*?)<\/div><divclass="card-price">(.*?)<\/div>/g // /(.*?)/
      var regData= []
      // if (line.match("Scan completed :")) {
      // regData = (regP.exec(body)[1]).trim();
      let bodys = body.replace(/\s/g,'');
      let ii = true;
      while (ii) {
        let regF = regP.exec(bodys);
        if(regF == null){
          ii = false;
        }else{
          regData.push({
            aa:regF[1],
            bb:regF[2]
          })
        }
      }
      console.log(regData)
      res.send(body);
    }else{
      console.log(error)
    }
  })
  // res.send('api');
});

module.exports = router;
