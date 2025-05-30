const {Sequelize} = require('sequelize');
require('dotenv').config();

    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,{
            host : process.env.DB_HOST,
            dialect : 'postgres',
            port : process.env.PORT
        }
    );
    
module.exports = {sequelize};