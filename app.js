const express = require('express');
const app = express();
app.get('/', function (req, res) {
	res.send('Hello, Corso DO101 pippo! test.. altra modifica.. altra modifica build automatica + modifica + modifica\n');
});
app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
module.exports = app;
