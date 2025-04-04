const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const DB_NAME = process.env.DATABASE_NAME
const DB_USER = process.env.DATABASE_USER
const DB_PASSWORD = process.env.DATABASE_PASSWORD
const DB_HOST = process.env.DATABASE_HOST
const DB_PORT = process.env.DATABASE_PORT
console.log(DB_NAME,DB_USER,DB_PASSWORD,DB_HOST, DB_PORT);
 const db = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
     
})

const connection = () => {
     db.authenticate().then(() => {
        console.log('Connection has been established successfully. ✅');

      }).catch(err => {
        console.error('Unable to connect to the database: ❌ ', err);
      }

    );
}

module.exports = { connection, db };
