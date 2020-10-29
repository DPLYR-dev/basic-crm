const fse = require('fs-extra')
const TCtrl = require('./text')

exports.getLeads = async function (req, res) {
  var file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
  file.forEach(function (v) { delete v.createdAtUS; });
  res.render('all', { title: 'DPLYR CRM', data: file });
}

exports.geSingleLead = async function (req, res){
  var file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
  delete file[req.params.id].createdAtUS
  var texts = TCtrl.map((e)=> e(file[req.params.id]))
  res.render('viewLead', {lead: file[req.params.id], title: 'DPLYR CRM', texts: texts})
}

exports.addLead = async function (req, res) {
  console.log(req.body)
  var data = req.body;
  data.createdAt = Date()
  data.createdAtUS = Date.now()
  var file;
  try {
    file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
    data.id = file.length
    file.push(data)
  } catch {
    data.id = 0
    file = [data]
    console.log("file not found creating new file")
  }
  fse.writeJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json', file)


  return res.render('viewLead', { lead: data, title: 'DPLYR CRM'})
}

exports.deleteLead = async function (req, res) {
  var file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
  file.splice(req.params.id, 1)
  fse.writeJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json', file)
  res.render('all', { title: 'DPLYR CRM', data: file })
}
