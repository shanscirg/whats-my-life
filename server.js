const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

// Require models
const db = require("./models");

// Import routes and give the server access to them.
// const routes = require("./controllers/catsController.js");
// app.use(routes);

// Routes
// =============================================================
app.use("/lads", require("./routes/api-routes.js"));
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);

app.get("/", (req, res) => res.send("INDEX"));

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
