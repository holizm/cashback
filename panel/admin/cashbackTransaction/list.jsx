import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>coreCustomer</th>
    <th>coreTransactionType</th>
    <th>coreTransactionDate</th>
    <th>cashbackAmount</th>
    <th>coreBalance</th>
</>

const row = item => <>
    <td>{item.cashbackAccount?.customer?.title}</td>
    <td>{item.cashbackTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.amount}</td>
    <td>{item.balance}</td>
</>

export default <List
    create={Form}
    hasEdit
    headers={headers}
    row={row}
/>
