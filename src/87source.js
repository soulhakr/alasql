/*
//
// HELP for Alasql.js
// Date: 03.11.2014
// (c) 2014, Andrey Gershun
//
*/

yy.Source = function (params) { return yy.extend(this, params); }
yy.Source.prototype.toString = function() {
	var s = K('SOURCE');
	if(this.url) s += ' '+S('\''+this.url+'\'');
	return s;
}

// SOURCE FILE
yy.Source.prototype.execute = function (databaseid,params,cb) {
//	console.log(this.url);
	loadFile(this.url, !!cb, function(data){
//		console.log(data);
		var res = 1;
		alasql(data);
		if(cb) res = cb(res);
		return res;
	}, function(err){
		throw err;
	});
	return 1;
};
