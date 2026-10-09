import { component$ } from '@builder.io/qwik'
import CashbackCashback from 'cashbackCashback'
import cashbackLoadCashback from 'cashbackLoadCashback'

export default component$(() => {
    const data = cashbackLoadCashback().value
    return <CashbackCashback {...data} />
})

export { cashbackLoadCashback as loadCashback }
