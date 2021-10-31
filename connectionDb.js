const { Sequelize } = require('sequelize');
//require('dotenv').config({path: './../.env'})

var sequelize;

let config = {
    host: 'localhost',
    database: 'online_tution',
     user: 'ashu',
     password: 'ashutosh',
    //user : 'buildRemote',
    //password : 'coMpleXp@ssWord$321',
    port : 3306
}

function getConnection() {
    if(!sequelize){
        sequelize= new Sequelize(config.database, config.user, config.password, {
            host: config.host,
            port: config.port,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
        sequelize.sync({alter:true});
    }
    return sequelize;
    
}




module.exports = {
    getConnection
};