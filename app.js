const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const querystring = require('querystring');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/redirect', (req, res) => {
    //console.log(req.body);
    const urlParts = url.parse(req.url);

  const queryParams = querystring.parse(urlParts.query);
  const params = Object.entries(req.query);
  console.log(params);
  const code=queryParams['id_token'].split(".")[1];
  const decodedString = Buffer.from(code, 'base64').toString('utf-8');
  console.log(decodedString);
  const decoded = JSON.parse(decodedString);
  var email=null;
  if(decoded.otherMails!==undefined){
   email=decoded.otherMails[0];
  console.log(email);
  }
  else{
     email="Not specified";
  }
  const givenName=decoded.givenName;
  console.log(givenName);
  const surname=decoded.surname;
  console.log(surname);
  const issuerUserId=decoded.issuerUserId;
  console.log(issuerUserId);
  
  res.render('params', { email:email, givenName: givenName,surname: surname,issuerUserId: issuerUserId });
});

app.get('/redirectLocal', (req, res) => {
    //console.log(req.body);
    const urlParts = url.parse(req.url);

  const queryParams = querystring.parse(urlParts.query);
  const params = Object.entries(req.query);
  console.log(params);
  const code=queryParams['id_token'].split(".")[1];
  const decodedString = Buffer.from(code, 'base64').toString('utf-8');
  console.log(decodedString);
  const decoded = JSON.parse(decodedString);
  var email=null;
  if(decoded.otherMails!==undefined){
   email=decoded.otherMails[0];
  console.log(email);
  }
  else if(decoded.emails!==undefined){
     email=decoded.emails[0];
    console.log(email);
  }
  else{
     email="Not sepcified";

    console.log(email);
  }
  console.log(email);
  const givenName=decoded.given_name;
  console.log(givenName);
  const surname=decoded.family_name;
  console.log(surname);
  const issuerUserId=decoded.oid;
  console.log(issuerUserId);
  res.render('params', { email: email, givenName: givenName,surname: surname,issuerUserId: issuerUserId });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
