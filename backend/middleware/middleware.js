const session = require("express-session");
const bodyParser = require("body-parser")
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(session({
    secret: process.env.SESSIONSECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser(process.env.SESSIONSECRET))
app.use(passport.initialize())
app.use(passport.session())

module.exports = app;