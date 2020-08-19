const express = require("express");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

mongoose.connect(process.env.MONGOCLUSTER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


app.use(routes);
app.listen(port, () => console.log(`app is listening on port: ${port}`))