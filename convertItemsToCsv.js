let converter = require('json-2-csv');
const uniques = require('./uniqueItems.json');
const sets = require('./setItems.json');
const fs = require('fs');

async function convertItems(uniques, sets) {
    let options = {
        emptyFieldValue: ''
    }
    const uniqueCsv = await converter.json2csv(uniques, options);
    const setCsv = await converter.json2csv(sets, options);

    fs.writeFileSync('uniqueItems.csv', uniqueCsv)
    fs.writeFileSync('setItems.csv', setCsv);
}

convertItems(uniques, sets);
