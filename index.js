const request = require('request');


request('https://hackathon2020.herokuapp.com/flights?date=2020-01-01', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
