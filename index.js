const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{'title':title});
});


///about-us
app.get('/about-tigray', (req, res) => {
  var title = 'About Tigray Page';
  res.render('pages/about-tigray',{'title':title});
});

///tigray-genocide
app.get('/tigray-genocide', (req, res) => {
  var title = 'Tigray Genocide  Page';
  res.render('pages/tigray-genocide',{'title':title});
});


app.get('/tigray-conflict', (req, res) => {
  var title = 'Tigray Conflict Page';
  res.render('pages/tigray-conflict',{'title':title});
});

app.get('/tdf', (req, res) => {
  var title = 'TDF Page';
  res.render('pages/tdf',{'title':title});
});

//tigray-leader 
app.get('/tigray-leader', (req, res) => {
  var title = 'Tigray Leader Page';
  res.render('pages/tigray-leader',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
