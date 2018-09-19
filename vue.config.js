// vue.config.js
const path = require('path');
const express = require('express');
const app = express();
var apiRoutes = express.Router();
app.use('/api', apiRoutes);

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {

    devServer: {
        port: 8888,
        before: app => {
        }
    }
    //其他配置....
};