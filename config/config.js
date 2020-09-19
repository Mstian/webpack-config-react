const path = require('path');
const IS_DEV = process.env.NODE_ENV !== 'production';
module.exports = {
    PROJECT_PATH: path.resolve(__dirname, "../"),
    IS_DEV,
    PORT: 8000,
    HOST: 'localhost'
}