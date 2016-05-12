
var commands = require('../config/orm.js');
var orm = require('../config/orm.js');

var burger = {
	selectBurgers: function(value, callback){
		orm.selectWhere('myburgers', '*', 'devour', value, function(result){
			callback(result);

		})
	},
	addBurger: function(name, status){
		orm.addItem('myburgers', ['burger_name', 'devour'], [name, status], function(result){
			return result;
		})
	},
	eatBurger: function(id){
		orm.updateItem('myburgers', 'devour', 1, 'id', id, function(result){
			return result;
		})
	},
	purgeBurgers: function(){
		orm.removeItem('myburgers', 'devour', 1, function(result){
			return result;
		})
	}
};

module.exports = burger;
