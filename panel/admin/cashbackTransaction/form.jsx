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
        placeholder='account'
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
        placeholder='transactionType'
        property='cashbackTransactionType'
        required
    />
    <DateTime
        placeholder='transactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
