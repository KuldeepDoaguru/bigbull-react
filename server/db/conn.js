const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

/*****create connection to DB */
mongoose
  .connect("mongodb://127.0.0.1:27017/bigbullstrading", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

// mongoose.connect("mongodb://localhost:27017/bigbullstrading").then(()=>{
//     console.log("connection Successful");
// }).catch((err)=>{
//     console.log("Connection Error")
// });
