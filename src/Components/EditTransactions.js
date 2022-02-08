import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTransactions() {
  const navigate = useNavigate();
  console.log(useParams());
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  //think about the handleSubmit
  //in the new page handleSubmit we use .post but edit is .put

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const addTransaction = (newTransaction) => {
    axios
      .put(`${URL}/transactions`, newTransaction)
      .then(() => navigate("/transactions"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then(() => navigate("/transactions"));
  };

  return (
    <div className="New">
      <h3>Add a New Item</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          onChange={handleTextChange}
          placeholder="date of transaction"
          required
        />
        <label htmlFor="name">Name of Transaction:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="what is this transaction?"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          placeholder="amount..."
          onChange={(addTransaction, handleTextChange)}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          placeholder="who this transaction was with (ie. employer, bank, pet store, grocery store, etc)"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <textarea
          id="category"
          name="category"
          onChange={handleTextChange}
          placeholder=" what category does this fall into (income, savings, pets, food, etc)
          "
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransactions;
