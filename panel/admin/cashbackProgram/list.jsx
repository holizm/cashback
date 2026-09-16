import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>cashbackProgram</th>
    <th>cashbackCode</th>
    <th>cashbackPercentage</th>
    <th>cashbackEndDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.percentage}</td>
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
