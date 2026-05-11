const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const testRoutes = require("./routes/testRoutes");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", testRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});