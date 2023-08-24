const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}

// const MONGO_URI =
// process.env.MONGODB_URI || "mongodb://localhost:27017/Ecommerce";
// mongoose.connect(MONGO_URI)
// .then((x)=>{
//   const dbName = x.connections[0].name;
//   console.log(`Connected to Mongo! Database name: "${dbName}"`);
// })
// .catch((err)=>{
//   console.error("Error connecting to mongo: ", err);
// })