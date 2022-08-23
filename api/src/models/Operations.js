
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


    sequelize.define("Wallet", {

        Id: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            unique: true,
            primaryKey: true,
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
            defaultValue: false
        },

    })
}