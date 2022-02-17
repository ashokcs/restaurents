
// Importing express module
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(express.json());
app.use(express.static(__dirname + '/'));
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/thanks.html', (req, res) => {
  let data = fs.readFileSync(__dirname + '/thanks.html', 'utf8');
  if(data)
  {
    console.log(req.body);
    data = data.replace('placeholder_1', req.body.restaurent);
    data = data.replace('placeholder_2', req.body.address);
    res.send(data);
  }
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});