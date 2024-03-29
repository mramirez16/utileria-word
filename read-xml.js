const convert = require('xml-js');
const fs = require('fs');
module.exports.readXml = (xmlFile) => {
    if (!xmlFile) {
        console.log('Toma el xml de ejemplo para pruebas'),
            xmlFile = fs.readFileSync('./file.xml', 'utf-8');
    }
    console.log('xmlFile', xmlFile);
    // Se valida que exista archivo
    if (!xmlFile.trim()) {
        console.log('Error en el xml');
        return null;
    }
    const jsonData = JSON.parse(convert.xml2json(xmlFile, { compact: true, spaces: 2 }));
    console.log('jsonData', jsonData);
    if (Object.keys(jsonData).length === 0) {
        console.log('Error en parsear xml');
        return null;
    }
    return jsonData;
};



