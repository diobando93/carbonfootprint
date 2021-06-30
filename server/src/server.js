const express = require("express");
const factors = require("./routes/api/factors");
const users = require("./routes/api/users");
const reports = require("./routes/api/reports");
const bodyParser = require("body-parser");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());
app.use("/api/factors", factors);
app.use("/api/users", users);
app.use("/api/reports", reports);

//DB config

require("./config/database");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
