const dotenv = require('dotenv');

dotenv.config();

const appConfig = {

    env: process.env.NODE_ENV || 'development',
    express_port: process.env.EXPRESS_PORT || 3306
}

module.exports = appConfig;