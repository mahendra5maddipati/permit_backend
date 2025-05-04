// server/routes/access.js
const express = require("express");
const router = express.Router();
const { handlePermissionCheck } = require("../controllers/permissionController");

router.post("/check-permission", handlePermissionCheck);

module.exports = router;
