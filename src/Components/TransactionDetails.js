import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
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
  return (
    <article>
      <h3>{transaction.date}</h3>
      <h5>
        <span>
          <a href={transaction.name}>{transaction.name}</a>
        </span>{" "}
      </h5>
      <h6>{transaction.amount}</h6>
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
      </div>
    </article>
  );
}

export default TransactionDetails;
