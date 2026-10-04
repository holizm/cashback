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
        cashbackAccount
        placeholder='account'
        required
    />
    <Select
        cashbackTransactionType
        options={[
            'earn',
            'redeem',
            'expire',
            'reverse',
            'adjust',
        ]}
        placeholder='transactionType'
        required
    />
    <DateTime
        required
        transactionDate
    />
    <Numeric
        amount
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
