import { getWithAuthentication } from 'core'

export default props => getWithAuthentication('/cashback/cashbackAccount/list', props)
