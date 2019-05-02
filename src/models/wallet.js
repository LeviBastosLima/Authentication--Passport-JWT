module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('Wallet', {
        number: DataTypes.INTEGER
    })
    return Wallet
}