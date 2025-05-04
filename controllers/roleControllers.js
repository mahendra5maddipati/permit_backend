// server/controllers/roleController.js
const { assignRole } = require("../services/permitServices");

const handleRoleAssignment = async (req, res) => {
  const { userEmail, role, workspaceId } = req.body;
  try {
    await assignRole(userEmail, role, workspaceId);
    res.status(200).json({ message: "Role assigned successfully" });
  } catch (err) {
    console.error("Role assignment error:", err);
    res.status(500).json({ error: "Failed to assign role" });
  }
};

module.exports = { handleRoleAssignment };
