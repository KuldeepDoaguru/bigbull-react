const mongoose = require("mongoose");

/*****create connection to DB */
// mongoose.connect("mongodb://localhost:27017/mynewdb").then(()=>{
//     console.log("connection Successful");
// }).catch((err)=>{
//     console.log("Connection Error")
// });
mongoose
  .connect("mongodb://127.0.0.1:27017/bigbulls-trading", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });
