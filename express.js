var express = require('express');
var app = express();
var http = require('http').Server(app);


var beers=['heineken','1664'];


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes à l\'accueil');

});

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/beers',function(req,res){
	res.status(200);
	res.send(beers);

});

app.get('/beers/:id',function(req,res){
	res.status(200);
	var myBeer;
	for (var i = 0, c = beers.length; i < c; i++) {
    	if (beers[i]==req.params.id){
    		myBeer = beers[i];
    	}
    }
    res.send(myBeer);

});

app.delete('/beers/:id',function(req,res){
	res.status(200);

	for (var i = 0, c = beers.length; i < c; i++) {
    	if (beers[i]==req.params.id){
    		beers.splice(i,1);
    	}
    }

    res.send();

});





app.post('/beers',function(req,res){
	res.status(201);
	res.send(beers.push(req.body.name));

});


app.listen(8080), function(){
	console.log("listening to 8080");
}