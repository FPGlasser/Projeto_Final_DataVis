const fs = require('fs');

const requireData = () => {

  const dataJson = fs.readFileSync('./database/bankFull.json', {encoding:'utf8', flag:'r'});
  const dataObj = JSON.parse(dataJson);

  return dataObj;
}

//console.table(requireData())

module.exports = requireData; //module exported;