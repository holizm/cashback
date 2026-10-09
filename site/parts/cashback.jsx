import Item from 'item'
import List from 'list'
import CashbackCashbackBalance from 'cashbackCashbackBalance'

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
                <CashbackCashbackBalance
                    cashbackAccount={cashbackAccount}
                    key={cashbackAccount.id}
                />
            </Item>)
        }
    </List>
</main>
