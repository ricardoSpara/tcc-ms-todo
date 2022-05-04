const mongoose = require('mongoose');
const mongoConfig = require('../config/database');

class Database {
  constructor() {
    this.mongo();

    mongoose.connection.on('disconnected', this.mongo);
  }

  mongo() {
    mongoose
      .connect(mongoConfig.mongoUrl, {
        useNewUrlParser: true,
      })
      .then(() => {
        return console.log(`Successfully connected to ${mongoConfig.mongoUrl}`);
      })
      .catch(error => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  }
}

module.exports = new Database();