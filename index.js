const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const calc = require('processData');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8000);
});

app.use(bodyParser.urlencoded({ extended: true })); 
//Form POST request
app.post('/form', function(req, res) {
    res.send(JSON.stringify(req.body));
    app.get("https://americanhackathon.herokuapp.com/flight?date=" + req.body.departureDate), function(req, res){
        data.calcTime(res.body);
    }

});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});




