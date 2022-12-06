const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://votybe:Votybe@votybemedia.80evc.mongodb.net/database?retryWrites=true&w=majority",
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
