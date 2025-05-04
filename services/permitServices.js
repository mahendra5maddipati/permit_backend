// server/services/permitService.js
const { Permit } = require('permitio');
require("dotenv").config();

const permit = new Permit({
  pdp: "https://cloudpdp.api.permit.io",
  token: process.env.PERMIT_API_KEY,
});

const checkPermission = async (user, resource, action) => {
  return await permit.check(user, resource, action);
};

const assignRole = async (userEmail, role, workspaceId) => {
  return await permit.api.assignRole({
    user: `user:${userEmail}`,
    role,
    resource: `workspace:${workspaceId}`,
  });
};

module.exports = {
  checkPermission,
  assignRole,
};
