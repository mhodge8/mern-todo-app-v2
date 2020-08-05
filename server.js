require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items")

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* mongoose db*/
const db = process.env.DB_URL;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Database Connected"))
    .catch( (err) => console.log(err));

app.use("/api/items", items)

app.listen(port, () => console.log(`server started on port ${port}`));