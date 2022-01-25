import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const API = process.env.REACT_APP_API_URL;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, []); //use this effect when what is in the [] is hit or when its empty only on the initial render

  return (
    <div className="Transactions">
      <section>
        <ul>
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Transactions;
