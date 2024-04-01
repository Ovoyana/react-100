import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({transactions}){
    return (
        <table className={css.table}>
          <thead className={css.headline}>
            <tr>
              <th className={css.title}>Type</th>
              <th className={css.title}>Amount</th>
              <th className={css.title}>Currency</th>
            </tr>
          </thead>
    
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td className={css.transactions}>{transaction.type}</td>
                  <td className={css.transactions}>{transaction.amount}</td>
                  <td className={css.transactions}>{transaction.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    };
    
