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
  }, [API]);

  let total = transactions.map((transaction) => transaction.amount);

  let amount = total.reduce((prev, curr) => Number(prev) + Number(curr), 0);

  let color = "black";
  if (amount > 1000) {
    color = "green";
  } else if (amount < 0) {
    color = "red";
  }
  return (
    <div className="Transactions">
      <section>
        <ul>
          <h1 style={{ color: color }}>
            Budget Total: {"$" + amount.toFixed(2)}
          </h1>
          <table>
            <thead></thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return (
                  <Transaction
                    key={index}
                    transaction={transaction}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
        </ul>
      </section>
    </div>
  );
}

export default Transactions;
