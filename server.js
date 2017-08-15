var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article-one={
title:'prajawal s first article',
heading:'iiit',
date:'aug 15,2017',
content:`frsher s is coming..........we have our freshers on 19 th august 
today is 71 st independence day.....happy independence day to all`
};
function createtemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content-data.content; 

var htmltemplate=`
<html>
<head>
<title>
${title}
</title>
<meta name="viewport" content="width-device-width, initial-scale=1"/>


</head>
<body>
<div class="container">
<div>
<a href="/">home</a>
</div>
<hr/>
<h2>
${heading}
</h2>
<div>
${date}
</div>
<div>
${content}
</div>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.send(createtemplate(article-one));
});
app.get('/article-one', function (req, res){
res.sendfile(path.join(__dirname,'ui','article-one.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
