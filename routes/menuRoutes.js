const express = require("express");
const router = express.Router();
const {
  getMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getMenuItems);
router.post("/", authMiddleware, addMenuItem);
router.put("/:id", authMiddleware, updateMenuItem);
router.delete("/:id", authMiddleware, deleteMenuItem);

module.exports = router;
