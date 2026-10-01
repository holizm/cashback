import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.percentage}</td>
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>
