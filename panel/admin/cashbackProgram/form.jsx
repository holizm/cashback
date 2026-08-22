import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='cashbackCode'
        property='code'
        required
    />
    <DateTime
        placeholder='cashbackStartDate'
        property='startDate'
    />
    <DateTime
        placeholder='cashbackEndDate'
        property='endDate'
    />
    <Numeric
        placeholder='cashbackPercentage'
        property='percentage'
    />
    <Numeric
        placeholder='cashbackMaximumAmount'
        property='maximumAmount'
    />
    <LongText
        placeholder='cashbackDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
