const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(
      "localhost:27017",
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
