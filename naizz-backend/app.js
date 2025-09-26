const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const sequelize = require("./src/db/sequelize");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT;

// Middleware
app.use(favicon(__dirname + "/favicon.ico"));
app.use(bodyParser.json());
app.use(cors());
app.use("/pictures", express.static(path.join(__dirname, "public/pictures")));

sequelize.initDb();

app.get("/", (req, res) => {
  res.json("Naizz API 🚀");
});

// Routes
//require("./src/routes/inscription")(app);
//require("./src/routes/connexion")(app);

require("./swagger")(app);

app.use(({ res }) => {
  const message =
    "Unable to find the requested resource! You can try another URL.";
  res.status(404).json({ message });
});

app.listen(port, () => {
  console.log(`Our application is running on : http://localhost:${port}`);
});
