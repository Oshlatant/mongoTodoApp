const path = require("path");
const express = require("express");
const morgan = require("morgan");
const body_parser = require("body-parser");

const router = require("./routes/todos.js");
const mongo_db = require("./middleware/mongo_db.js");

const app = express();
const port = 8080;

//middleware
app.use(express.static(path.join(__dirname, "/public")));
app.use(mongo_db);
app.use(morgan("tiny"));
app.use(body_parser.json());

//routes
app.use(router);

app.listen(port, () => {
    const time_now = new Date(Date.now());

    console.log(`[${time_now.getHours()}:${time_now.getMinutes()}] Server ON`);
});