const fse = require('fs-extra')


exports.addLead = async function(req, res){
  console.log(req.body)
  var data = req.body;
  data.createdAt = Date()
  data.createdAtUS = Date.now()
  var file;
  try{
    file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
    data.id = file.length
    file.push(data)
  } catch {
    data.id = 0
    file = [data]
    console.log("file not found creating new file")
  }
  fse.writeJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json', file)
  
  
  return res.render('added', {text:"Hello "+ JSON.stringify(req.body)})
}

exports.deleteLead = async function(req, res){
  var file = await fse.readJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json')
  file.splice(req.params.id, 1)
  fse.writeJSONSync('/Users/ahmedmgh/WORK/DPLYR/Tech/utils/crm/data.json', file)
  res.render('all', { title: 'DPLYR CRM', data: file })
}