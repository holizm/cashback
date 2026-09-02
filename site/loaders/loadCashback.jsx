import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'core'
import { getGlobalization } from 'globalization'
import { getCashbackAccounts } from 'cashback'

export default routeLoader$(async props => {
    const [
        cashbackAccounts,
        globalization,
    ] = await useAsync([
        getCashbackAccounts(props),
        getGlobalization(props),
    ])
    const result = {
        cashbackAccounts,
        ...globalization,
    }
    return result
})
