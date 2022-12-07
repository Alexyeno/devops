const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://app:Ieu5yU4pyKZ4Yc38@app.krywxza.mongodb.net/?retryWrites=true&w=majority",
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
