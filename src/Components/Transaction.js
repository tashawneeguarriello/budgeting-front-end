import { Link } from "react-router-dom";

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
      <td></td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
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
