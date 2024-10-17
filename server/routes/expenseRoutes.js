const express = require("express");
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
router.put("/expenses/:id", updateExpense); // Update an expense
router.delete("/expenses/:id", deleteExpense); // Delete an expense

module.exports = router;
