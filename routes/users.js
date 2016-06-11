var express = require('express');
var router = express.Router();
var database = require('./db');
var bodyParser = require('body-parser');


/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/userslist', function (req, res) {
  var j;
  database.executeSql('SELECT * FROM users', function (data, err) {

    if (!err) {
      console.log(data);
      res.send(data);
    }else{
      res.send(err);
    }
  });
//res.send('respond with a resource');
});

router.post('/usersinsert', function (req, res) {
var post = {
        name: req.body.name 
    };  
    database.executeSql("INSERT INTO users (`id`, `name`) VALUES (NULL, '"+ req.body.name +"')", function (data, err) {

    if (!err) {
      console.log(data);
      res.send(data);
    }else{
      res.send(err);
    }
  });
//res.send('respond with a resource');
});
module.exports = router;
