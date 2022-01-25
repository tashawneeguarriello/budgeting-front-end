import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransactions() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    from: "",
    item_name: "",
    amount: 0,
    amount: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const addTransaction = (newTransaction) => {
    axios
      .post(`${URL}/transactions`, newTransaction)
      .then(() => navigate("/transactions"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then(() => navigate("/transactions"));
    // OR:
    // addtransaction(transaction);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date of transaction"
          required
        />
        <label htmlFor="name">Name of Transaction</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="what is this transaction?"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={transaction.amount}
          placeholder="amount..."
          onChange={addTransaction}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          placeholder="who this transaction was with (ie. employer, bank, pet store, grocery store, etc)"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <textarea
          id="category"
          name="category"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder=" what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.
          "
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransactions;
