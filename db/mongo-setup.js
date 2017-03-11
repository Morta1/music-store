const mongoConfig = require('../config/mongo.json');

module.exports = (mongoose) => {
    const {port, host, database} = mongoConfig;
    mongoose.connect(`${host}:${port}/${database}`);
    mongoose.Promise = global.Promise;
};

