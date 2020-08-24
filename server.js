const express = require("express");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");
const session = require("express-session");
// const passport = require("./backend/passport/index");

require('dotenv').config()


const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SESSIONSECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// )


// app.use((req, res,next) => {
//   console.log("req.session", req.session)
// })


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

mongoose.connect(process.env.MONGOCLUSTER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(routes);



app.listen(port, () => console.log(`app is listening on port: ${port}`))