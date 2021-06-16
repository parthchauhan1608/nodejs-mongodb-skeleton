const express = require("express");
const { json, urlencoded } = express;
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
require("dotenv/config");

// create express app instance
const app = express();

// apply middlewares
app.use(cors());
app.use(morgan(process.env.MORGAN_LOGGING_MODE));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api/v1/", routes);

// connect to the mongodb server and starting listening to the app server
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening at port ${process.env.PORT}.`);
        })
    }
)