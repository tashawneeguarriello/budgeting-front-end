import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
  console.log(useParams());
  const navigate = useNavigate();

  useEffect(() => {
    //GET request to http:localhost:3000/transactions/:index(1/2/0  )
    //use set Transaction to change our current transaction
    //to the data we get back
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data));
  }, [API, index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => navigate("/transactions"));
  };

  const handleEdit = () => {
    navigate(`/transactions/${index}/edit`);
  };
  return (
    <article>
      <h4>Date: {transaction.date}</h4>
      <h4>Name: {transaction.name}</h4>
      <h4>From: {transaction.from}</h4>
      <h4>Amount: {transaction.amount}</h4>
      <h4>Category: {transaction.category}</h4>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          {" "}
          <button onClick={handleEdit}>Edit</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;
