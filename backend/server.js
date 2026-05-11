const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());



const testRoutes = require("./routes/testRoutes");

app.use("/api", testRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});