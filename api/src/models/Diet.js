const { DataTypes } = require('sequelize');

/* This code exports a function that defines a Sequelize model for a "diet" table in a database. The
function takes a Sequelize instance as an argument and uses it to define the model with two columns:
"id" and "name". The "id" column is a UUID type with a default value of UUIDV4, and it is set as the
primary key. The "name" column is a string type and cannot be null. */
module.exports = (sequelize) => {
	sequelize.define('diet', {
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
	});
};
