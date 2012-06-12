
exports.routes = function(app, settings) {

	// root
    app.get('/', function(req, res){
		res.render('home/index');
    });
};