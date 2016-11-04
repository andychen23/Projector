var express = require('express'),
	app = express(),
	server = require('http').createServer(app)
	

//Save Date 
var selectedPic = 'haha';
var recentPicsURL = [];
var recentPicsTitle = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/currentSelect', function(req, res){
    console.log('GET /')
    res.end(JSON.stringify(selectedPic));
});


app.get('/recentPics', function(req, res){
    console.log('GET /');
    var temp = {};
    temp['url'] = recentPicsURL;
    temp['title'] = recentPicsTitle;
    //console.log(JSON.stringify(temp));
    res.end(JSON.stringify(temp));
});

app.post('/currentSelect', function(req, res){
    console.log('POST /');
    console.dir(req.query);
    selectedPic = req.query;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Pic Click recorded');
});

app.post('/recentPics', function(req, res){
    console.log('POST /');
    var imgLink = req.query.imgLink;
    var imgTitle = req.query.imgTitle;
    //console.dir(req.query.imgLink);
    //console.dir(req.query.imgTitle);
    updateRecentPics(imgLink,imgTitle);

    //recentPics.push(eq.query);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Add Pictures to recentPics');
});


app.get('/ProjectorMinor', function(req, res) {
  res.sendfile(__dirname + '/ProjectorMinor.html');
});



app.get('/ProjectorMinorCSS', function(req, res) {
  res.sendfile(__dirname + '/ProjectorMinor.css');
});

app.get('/ProjectorMinorJS', function(req, res) {
  res.sendfile(__dirname + '/ProjectorMinor.js');
});

app.get('/Projector', function(req, res) {
  res.sendfile(__dirname + '/Projector.html');
});

app.get('/ProjectorCSS', function(req, res) {
  res.sendfile(__dirname + '/Projector.css');
});

app.get('/ProjectorJS', function(req, res) {
  res.sendfile(__dirname + '/Projector.js');
});



function updateRecentPics(picURL, picTitle){
  if(recentPicsURL.indexOf(picURL) == -1){
      recentPicsURL.push(picURL);
      recentPicsTitle.push(picTitle);
      if (recentPicsURL.length > 12){
          recentPicsURL.shift();
      }
      if (recentPicsTitle.length > 12){
          recentPicsTitle.shift();
      }
  }
}

console.log('Connected!~~~~!')
server.listen(4000);

//  54.158.251.62:4000
/**
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/ProjectorMinor.html');
});



app.get('/CSS', function(req, res) {
	res.sendfile(__dirname + '/ProjectorMinor.css');
});

app.get('/JS', function(req, res) {
	res.sendfile(__dirname + '/ProjectorMinor.js');
});

**/





