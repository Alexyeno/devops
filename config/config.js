const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb://Aymeric:azerty123@localhost:27017/?authMechanism=DEFAULT&authSource=app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Mongo Connected `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
