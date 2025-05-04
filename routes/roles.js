// server/routes/roles.js
const express = require("express");
const router = express.Router();
const { handleRoleAssignment } = require("../controllers/roleControllers");

router.post("/assign-role", handleRoleAssignment);

module.exports = router;
