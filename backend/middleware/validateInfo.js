const { validationResult } = require("express-validator");
const validateInfo = async (req, res, next) => {
  const result = await validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  next();
};
module.exports = validateInfo;
