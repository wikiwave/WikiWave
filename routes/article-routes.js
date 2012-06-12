
exports.routes = function(app, settings) {

    // index
    app.get('/articles', function(req, res){
		res.render('articles/index');
    });

    // new
    app.get('/articles/new', function(req, res){
		res.render('articles/new');
    });

    // new
    app.get('/articles/create', function(req, res){
		res.render('articles/show');
    });

    // edit
    app.get('/articles/:id/edit', function(req, res){
		var id = req.params['id'];
		res.render('articles/edit', {
			name: id
		});
	});

	// update
    app.post('/articles/:filename', function(req, res){
		res.render('articles/show');
	});

    // show
    app.get('/articles/:filename', function(req, res){
		res.render('articles/show');
	});

	// delete
    app.del('/articles/:filename', function(req, res){
		res.render('articles/index');
	});
};