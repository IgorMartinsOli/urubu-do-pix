const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Deposit = require('../models/Deposit');

const connection = new Sequelize(dbConfig);

User.init(connection);
Deposit.init(connection);

User.associate(connection.models);
Deposit.associate(connection.models);

module.exports = connection;