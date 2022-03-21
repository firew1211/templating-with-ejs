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
app.get('/cheesecake', (req, res) => {
  var title = 'Our cheesecake Page';
  res.render('pages/cheesecake',{'title':title});
});


app.get('/apple pie', (req, res) => {
  var title = 'Our apple pie Page';
  res.render('pages/apple-pie',{'title':title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
