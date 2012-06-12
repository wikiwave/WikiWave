/*   __      __.__ __   .__ __      __
    /  \    /  \__|  | _|__/  \    /  \_____ ___  __ ____
    \   \/\/   /  |  |/ /  \   \/\/   /\__  \\  \/ // __ \
     \        /|  |    <|  |\        /  / __ \\   /\  ___/
      \__/\  / |__|__|_ \__| \__/\  /  (____  /\_/  \___  >
           \/          \/         \/        \/          \/      */


var express     = require('express')
  , app         = express.createServer()
  , settings    = require('./settings').getSettings()
  , path        = require('path')
  ;

// Configure Express
app.settings = settings;
app.configure(function() {
    app.use('/public', express.static(path.join(__dirname, 'public')));
    console.log(path.join(__dirname, 'public'));
    // TODO:
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, '/views'));
    app.use(app.router);
    
    // Values available to every template
    app.locals({
        title: settings.title || 'WikiWave'
    });
});

// Add routes to router
require('./routes/base-routes').routes(app, settings);
require('./routes/article-routes').routes(app, settings);

// Start server
app.listen(process.env.PORT || 3000);
