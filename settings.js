const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=lBpGnRZS#jwhaZHm3FM34dgheUph4QwjPUSdaWbXww3jbdX4P1-8' : process.env.SESSION_ID,
    PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,
    SESSION_NAME: process.env.SESSION_NAME === undefined ? 'session' : process.env.SESSION_NAME,
    POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? '' : process.env.POSTGRESQL_URL
};
