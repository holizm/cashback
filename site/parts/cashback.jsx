import {
    Item,
    List,
} from 'core'
import { CashbackBalance } from 'cashback'

export default ({
    cashbackAccounts,
    translations,
}) => <main class='cashback'>
    <h1 class='title'>{translations?.cashbackCashback}</h1>
    <List class='items'>
        {
            cashbackAccounts?.data?.map(cashbackAccount => <Item
                inList
                key={cashbackAccount.id}
            >
                <CashbackBalance
                    cashbackAccount={cashbackAccount}
                    key={cashbackAccount.id}
                />
            </Item>)
        }
    </List>
</main>
