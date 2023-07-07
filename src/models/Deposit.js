const { Model, DataTypes } = require("sequelize");

class Deposit extends Model {
    static init(sequelize){
        super.init({
            value: DataTypes.FLOAT
        }, {
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.User,  { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Deposit;