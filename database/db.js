const mongoose = require("mongoose");

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
