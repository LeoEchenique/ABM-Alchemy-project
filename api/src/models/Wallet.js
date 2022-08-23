
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
        Balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },




    }, { timestamps: false })
}