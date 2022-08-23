
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


    sequelize.define("Operation", {

        Id: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            unique: true,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        Reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Mount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Type: {
            type: DataTypes.ENUM("Income", "Expense"),
            allowNull: false
        },

    })
}