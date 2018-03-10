const authentication = require("./authentication.js");
let mongoose = require('mongoose'),
    url = authentication();
mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose};
