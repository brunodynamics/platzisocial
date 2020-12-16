const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
const config = require("../config");
const user = require("./components/user/network");

const app = express();

app.use(express.json());

// Router
app.use("/api/user", user);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(config.api.port, () => {
  console.log("Server running on port", config.api.port);
});
