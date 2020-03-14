const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Require models
const db = require('./models');

// Require and use routes file
app.use('/', require('./routes/api-routes.js'));

// Sequelize sync and run server
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
