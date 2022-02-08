import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./TransactionEditForm.css";

function TransactionEditForm() {
  const API = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    from: "",
    item_name: "",
    amount: 0,
    category: "",
  });

  //call setTransaction with the transaction we are currently at
  // and then we are going to call setTransaction with the transaction the call returns
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  //make an api call to the back end, using the index from router

  useEffect(() => {
    axios.get(`${API}/transactions/${index}`).then((response) => {
      setTransaction(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    //make a put request
    //we will update one resources,we should go to the resource's detail page
    //if we see the updated information, that would the element in that index is rendered
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/${index}`));
  };

  return (
    <div className="Edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date of Transaction"
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount"
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>

      <a href={`/logs/${index}`}>
        <button>Back</button>
      </a>
    </div>
  );
}

export default TransactionEditForm;
