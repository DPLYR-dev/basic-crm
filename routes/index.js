var express = require('express');
var router = express.Router();
var LCtrl = require('../controllers/leads')
const fse = require('fs-extra')


var config = fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/config.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: config.appName });
});

router.get('/leads', LCtrl.getLeads);

router.post('/leads/add', LCtrl.addLead);

router.get('/leads/delete/:id', LCtrl.deleteLead);

router.get('/leads/updateDate/:id', LCtrl.updateLeadDate);

router.get("/leads/:id", LCtrl.geSingleLead)

module.exports = router;
