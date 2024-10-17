const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const { amount, category, date, description } = req.body;
  try {
    const expense = await Expense.create({
      userId: req.user._id, // Assuming the user ID is available in req.user
      amount,
      category,
      date,
      description,
    });
    res.status(201).json(expense);
    console.log(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all expenses for the user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user._id }); // Fetch expenses for the authenticated user
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing expense
exports.updateExpense = async (req, res) => {
  const { id } = req.params; // Extract the expense ID from the URL parameters
  const { amount, category, date, description } = req.body;

  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      { amount, category, date, description },
      { new: true } // Return the updated document
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params; // Extract the expense ID from the URL parameters

  try {
    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
