const fse = require('fs-extra')
const TCtrl = require('./text')
const path = require('path')

var config = fse.readJSONSync(path.join(__dirname, '..', 'config.json'));

exports.getLeads = async function (req, res) {
  var file = await fse.readJSONSync(path.join(__dirname, '..', 'data.json'));
  file.forEach(function (v) { delete v.createdAtUS; });
  res.render('all', { title: config.appName, data: file });
}

exports.geSingleLead = async function (req, res){
  var file = await fse.readJSONSync(path.join(__dirname, '..', 'data.json'));
  delete file[req.params.id].createdAtUS;
  var texts = TCtrl(file[req.params.id]);
  console.log(texts)
  res.render('viewLead', {lead: file[req.params.id], title: config.appName, texts: texts});
}

exports.addLead = async function (req, res) {
  console.log(req.body)
  var data = req.body;
  data.createdAt = Date();
  data.createdAtUS = Date.now();
  var file;
  try {
    file = await fse.readJSONSync(path.join(__dirname, '..', 'data.json'));
    data.id = file.length;
    file.push(data);
  } catch {
    data.id = 0;
    file = [data];
    console.log("file not found creating new file");
  }
  fse.writeJSONSync(path.join(__dirname, '..', 'data.json'), file);


  return res.render('viewLead', { lead: data, title: config.appName});
}

exports.deleteLead = async function (req, res) {
  var file = await fse.readJSONSync(path.join(__dirname, '..', 'data.json'));
  file.splice(req.params.id, 1);
  fse.writeJSONSync(path.join(__dirname, '..', 'data.json'), file);
  res.redirect('/leads')
}

exports.updateLeadDate = async function (req, res) {
  var file = await fse.readJSONSync(path.join(__dirname, '..', 'data.json'));
  file[req.params.id].createdAt = Date()
  file[req.params.id].createdAtUS= Date.now()
  fse.writeJSONSync(path.join(__dirname, '..', 'data.json'), file);
  res.redirect('/leads')
}
