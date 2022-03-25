const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{'title':title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
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



app.listen(port, () =>{
  console.log(`Example app listening on port${port}`);
  console.log(data);
});


