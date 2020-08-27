const express = require("express");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");
const passport = require("passport");

require('dotenv').config()


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

// mongoose connection
mongoose.connect(process.env.MONGOCLUSTER, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
}, () => console.log("Mongoose is connected"));


const app = express();
const port = process.env.PORT || 3001;


// middleware
const middleware = require("./backend/middleware/middleware")
app.use(middleware);
require("./backend/passport/index")(passport)

// implement routes
app.use(routes);

app.listen(port, () => console.log(`app is listening on port: ${port}`))