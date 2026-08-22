import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='cashbackAccount'
        property='cashbackAccount'
        required
    />
    <Select
        options={[
            'earn',
            'redeem',
            'expire',
            'reverse',
            'adjust',
        ]}
        placeholder='cashbackTransactionType'
        property='cashbackTransactionType'
        required
    />
    <DateTime
        placeholder='cashbackTransactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='cashbackAmount'
        property='amount'
        required
    />
    <LongText
        placeholder='cashbackDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
