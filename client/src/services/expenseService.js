import axios from "axios";

const API_URL = "http://localhost:5050/api/expenses/";

const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`${API_URL}add`, expenseData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getAllExpenses = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Ensure you only have one declaration for updateExpense
const updateExpense = async (id, expenseData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}${id}`, expenseData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const deleteExpense = async (expenseId) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}${expenseId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default { addExpense, getAllExpenses, updateExpense, deleteExpense };
