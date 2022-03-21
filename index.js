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
app.get('/about-us', (req, res) => {
  var title = 'Our about Us Page';
  res.render('pages/about-us',{'title':title});
});

///chessecake
app.get('/doughnut', (req, res) => {
  var title = 'Our doughnut  Page';
  res.render('pages/doughnut',{'title':title});
});


app.get('/pizza', (req, res) => {
  var title = 'Our pizza Page';
  res.render('pages/pizza',{'title':title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
