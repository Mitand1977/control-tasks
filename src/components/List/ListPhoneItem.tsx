import { Button, Card, CardActions, CardContent } from '@mui/material'

// import './ListPhoneItem.scss'

type Props = {
    id: number
    title: string
    desc: string
    currency: string
    price: number
    addTotal: (price: number) => void
}

const ListPhoneItem = ({
    id,
    title,
    desc,
    currency,
    price,
    addTotal,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="title">{title}</div>
                <div className="decs">{desc}</div>
                <div className="currency">
                    {' '}
                    <span>Currency:</span> {currency}
                </div>
                <div className="price">
                    <span>Price:</span> {price}
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined" onClick={() => addTotal(price)}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}
export default ListPhoneItem
