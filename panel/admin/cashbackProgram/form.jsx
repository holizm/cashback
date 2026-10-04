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
        placeholder='code'
        property='code'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
    />
    <Numeric
        placeholder='percentage'
        property='percentage'
    />
    <Numeric
        placeholder='maximumAmount'
        property='maximumAmount'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
