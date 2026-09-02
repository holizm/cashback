import { CashbackBalance } from 'cashback'

export default ({
    cashbackAccounts,
    translations,
}) => <main class='cashback'>
    <h1 class='title'>{translations?.cashbackCashback}</h1>
    <div class='items'>
        {
            cashbackAccounts?.data?.map(cashbackAccount => <CashbackBalance
                cashbackAccount={cashbackAccount}
                key={cashbackAccount.id}
            />)
        }
    </div>
</main>
