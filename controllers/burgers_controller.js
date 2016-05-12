var burgers = require('../models/burgers.js');
var express = require('express');
var path 	= require('path');
var router 	= express.Router();

router.get('/', function(req, res){
	burgers.selectBurgers('0', function(burgerResult){

		burgers.selectBurgers('1', function(devourResult){

			res.render('index', {myBurgers: burgerResult, devoured: devourResult});
		});
	});
});

router.post('/devour', function(req, res){
	burgers.eatBurger(req.body.id);
	res.redirect('/');
});

router.post('/add', function(req, res){
	burgers.addBurger(String(req.body.name), 0);
	res.redirect('/');
});

router.post('/purge', function(req, res){
	burgers.purgeBurgers();
	res.redirect('/');
})
module.exports = router;
