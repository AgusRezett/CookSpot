const { DataTypes } = require('sequelize');

/* This code exports a function that defines a Sequelize model for a recipe. The function takes a
Sequelize instance as an argument and uses it to define the model with the name 'recipe'. The model
has several attributes such as id, name, summary, healthScore, and steps, each with a specific data
type and constraints. This model can be used to interact with a database table for storing recipe
information. */
module.exports = (sequelize) => {
	sequelize.define('recipe', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		summary: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		healthScore: {
			type: DataTypes.INTEGER,
		},
		steps: {
			type: DataTypes.STRING,
		},
	});
};
