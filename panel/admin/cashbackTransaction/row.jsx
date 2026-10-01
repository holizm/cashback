import { DateTime } from 'list'

export default item => <>
    <td>{item.cashbackAccount?.customer?.title}</td>
    <td>{item.cashbackTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.amount}</td>
    <td>{item.balance}</td>
</>
