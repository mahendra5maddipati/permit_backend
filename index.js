// server/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const accessRoutes = require("./routes/access");
const roleRoutes = require("./routes/roles");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", accessRoutes);
app.use("/api", roleRoutes);

app.get("/", (req, res) => res.send("QuickCollab backend running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
