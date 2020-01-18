const request = require('request');


// request('https://hackathon2020.herokuapp.com/flights?date=2020-01-01', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// });

request('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1f707fdd7f1d581cdae2d724a1bf0ffb', {json:true}, (err,res,body) =>{
    if(err){return console.log(err);}
    console.log(body);
});
