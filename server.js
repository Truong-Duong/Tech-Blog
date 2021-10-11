// Dependencies
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import express-handlebars
const exphbs = require('express-handlebars');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({});

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log('Server listening on: http://localhost:' + PORT)
	);
});
