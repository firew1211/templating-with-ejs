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

///doughnut
app.get('/doughnut', (req, res) => {
  var title = 'Our doughnut  Page';
  res.render('pages/doughnut',{'title':title});
});


app.get('/pizza', (req, res) => {
  var title = 'Our pizza Page';
  res.render('pages/pizza',{'title':title});
});

app.get('/pasta', (req, res) => {
  var title = 'Our pasta Page';
  res.render('pages/pasta',{'title':title});
});

//salad
app.get('/salad', (req, res) => {
  var title = 'Our salad Page';
  res.render('pages/salad',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
