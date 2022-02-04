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
  }, [API]); //use this effect when what is in the [] is hit or when its empty only on the initial render

  let bankTotal = 1000;

  let total = transactions.map((transaction) => transaction.amount);

  let amount = total.reduce((prev, curr) => Number(prev) + Number(curr), 0);

  let currentBalance = bankTotal - amount;
  let numBalance = currentBalance.toFixed(2);

  return (
    <div className="Transactions">
      <section>
        <ul>
          <h1>Budget Total: {"$" + amount.toFixed(2)}</h1>
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
