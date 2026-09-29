import { component$ } from '@builder.io/qwik'
import {
    Cashback,
    loadCashback,
} from 'cashback'

export default component$(() => {
    const data = loadCashback().value
    return <Cashback {...data} />
})

export { loadCashback }
