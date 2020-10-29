var express = require('express');
var router = express.Router();
var LCtrl = require('../controllers/leads')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'DPLYR CRM' });
});
router.get('/leads', LCtrl.getLeads);
router.post('/leads/add', LCtrl.addLead)
router.get('/leads/delete/:id', LCtrl.deleteLead)
module.exports = router;
