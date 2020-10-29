const fse = require('fs-extra')
const path = require('path')

var renderTexts = function (lead) {
  var file = fse.readJSONSync(path.join(__dirname, '..', 'config.json'));
  var edTexts = []
  String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
  }
  file.texts.forEach(el => {
    edTexts.push(el.text
      .replaceAll("${lead.name}", lead.name)
      .replaceAll("${lead.company}", lead.company)
      .replaceAll("${lead.phone}", lead.phone)
      .replaceAll("${lead.email}", lead.email)
      .replaceAll("${company.name}", file.companyName)
      .replaceAll("${company.url}", file.companyURL)
      .replaceAll("${company.senderName}", file.senderName)
      .replaceAll("${company.senderPhone}", file.senderPhone)
      .replaceAll("${company.senderEmail}", file.senderEmail)
      .replaceAll("${company.calendly}", file.calendlyLink));
  });
  return edTexts;
}




module.exports = renderTexts;