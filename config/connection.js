const Sequelize = require('sequelize');
require('dotenv').config();

let sequelizeInit;

if (process.env.JAWSDB_URL) {
    sequelizeInit = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelizeInit = new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelizeInit;
