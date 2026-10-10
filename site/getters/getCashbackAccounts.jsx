import getWithAuthentication from 'getWithAuthentication'

export default props => getWithAuthentication('/cashback/cashbackAccount/list', props)
