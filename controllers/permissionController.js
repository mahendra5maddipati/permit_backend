// server/controllers/permissionController.js
const { checkPermission } = require("../services/permitServices");

const handlePermissionCheck = async (req, res) => {
  const { user, resource, action } = req.body;
  try {
    const allowed = await checkPermission(user, resource, action);
    res.status(200).json({ allowed });
  } catch (err) {
    console.error("Permission check error:", err);
    res.status(500).json({ error: "Permission check failed" });
  }
};

module.exports = { handlePermissionCheck };
