var express = require('express');
var router = express.Router();
var LCtrl = require('../controllers/leads')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DPLYR CRM' });
});
router.get('/leads', function(req, res, next) {
  res.render('all', { title: 'DPLYR CRM' });
});
router.post('/leads/add', LCtrl.addLead)
module.exports = router;
