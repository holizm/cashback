import { routeLoader$ } from '@builder.io/qwik-city'
import useAsync from 'useAsync'
import globalizationGetGlobalization from 'globalizationGetGlobalization'
import cashbackGetCashbackAccounts from 'cashbackGetCashbackAccounts'

export default routeLoader$(async props => {
    const [
        cashbackAccounts,
        globalization,
    ] = await useAsync([
        cashbackGetCashbackAccounts(props),
        globalizationGetGlobalization(props),
    ])
    const result = {
        cashbackAccounts,
        ...globalization,
    }
    return result
})
