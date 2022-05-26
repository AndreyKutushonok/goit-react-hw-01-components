import s from './TransactionHistory.module.css'
import propTypes from 'prop-types'
function TransactionHistory({items}){
    return(
        <table className={s.transactionHistory}>
            <thead className={s.head}>
                <tr>
                    <th className={s.headGrid}>Type</th>
                    <th className={s.headGrid}>Amount</th>
                    <th className={s.headGrid}>Currency</th>
                </tr>
            </thead>

            <tbody >
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td className={s.grid}>{type}</td>
                    <td className={s.grid}>{amount}</td>
                    <td className={s.grid}>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory