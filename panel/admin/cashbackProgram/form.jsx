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
        code
        required
    />
    <DateTime startDate />
    <DateTime endDate />
    <Numeric percentage />
    <Numeric maximumAmount />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
