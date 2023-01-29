import { Grid } from '@mui/material'
import listArray from 'Utils/listArray'
import ListPhoneItem from './ListPhoneItem'

type ItemProps = {
    id: number
    title: string
    desc: string
    currency: string
    price: number
}

type Props = {
    addTotal: (price: number) => void
}

const PhoneList = ({ addTotal }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {listArray.map(
                    ({ id, title, desc, currency, price }: ItemProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ListPhoneItem
                                id={id}
                                title={title}
                                desc={desc}
                                currency={currency}
                                price={price}
                                addTotal={addTotal}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default PhoneList
