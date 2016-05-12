var connection = require('./connection.js');

var orm = {
	selectWhere: function(table, selection, column, colValue, callback){
		var queryString = 'SELECT ' + selection + ' FROM ' + table + ' WHERE ' + column + ' = ?';

		connection.query(queryString, [valOfCol], function(err, res){
			if (err) {throw err};
			callback(res);
		});
	},
	addItem: function(table, keysArray, valuesArray, callback){
		var questionMarks = [];
		for (var i = 0; i < keysArray.length; i++) {
			questionMarks.push(' ?');
		};

		var queryString = 'INSERT INTO ' + table + ' (' + keysArray.toString() + ') VALUES (?)';
		connection.query(queryString, [valuesArray],function(err, res){
			if (err) {throw err};
			callback(res);
		});
	},
	updateItem: function(table, key, newValue, column, colValue, callback){
		var queryString = 'UPDATE ' + table + ' SET ' + key + ' = ' + newValue + ' WHERE ' + column + ' = ?';

		connection.query(queryString, [colValue], function(err, res){
			if (err) {throw err};
			callback(res);
		});
	},
	removeItem: function(table, column, colValue, callback){
		var queryString = 'DELETE FROM ' + table + ' WHERE ' + column + ' = ?';

		connection.query(queryString, [colValue], function(err, res){
			if (err) {throw err}
				callback(res);
		})
	}
};

module.exports = orm;
