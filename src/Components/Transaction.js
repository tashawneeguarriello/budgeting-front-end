import { Link } from "react-router-dom";
import TransactionDetails from "./TransactionDetails";

function Transaction({ transaction, index }) {
  console.log(transaction);
  return (
    <tr>
      <td>
        {transaction.date ? (
          <span>{transaction.date}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={transaction.item_name} target="blank" rel="noreferrer">
          {transaction.item_name}
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}></Link>
      </td>
      <td>
        {transaction.amount ? (
          <span>{transaction.amount}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    </tr>
  );
}

export default Transaction;
