require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;

const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`, {
	logging: false,
	native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Lectura de modelos y conección a Sequelize
/* This code is reading the files in the `/models` directory and filtering out any files that do not
have a `.js` extension or start with a `.`. It then requires each of the remaining `.js` files and
pushes the resulting module into an array called `modelDefiners`. This is a way to dynamically load
all the model definitions in the `/models` directory and make them available to the Sequelize
instance. */
fs.readdirSync(path.join(__dirname, '/models'))
	.filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

/* `modelDefiners.forEach((model) => model(sequelize));` is iterating over the `modelDefiners` array
and calling each function with the `sequelize` instance as an argument. This is a way to initialize
each model with the Sequelize instance and make them available for use in the application. */
modelDefiners.forEach((model) => model(sequelize));

/* These lines of code are capitalizing the first letter of each model name in the `sequelize.models`
object. */
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Recipe, Diet } = sequelize.models;

/* These lines of code are defining a many-to-many relationship between the `Recipe` and `Diet` models
using a junction table called `recipediet`. This means that a recipe can have multiple diets and a
diet can be associated with multiple recipes. The `belongsToMany` method is used to create this
relationship and the `through` option specifies the name of the junction table. */
Recipe.belongsToMany(Diet, { through: 'recipediet' });
Diet.belongsToMany(Recipe, { through: 'recipediet' });

module.exports = {
	...sequelize.models,
	conn: sequelize,
};
