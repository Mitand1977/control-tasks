import CssBaseline from '@mui/material/CssBaseline'
import PhoneList from 'components/List/PhoneList'
import { Button, Typography, Grid } from '@mui/material'
import { useState } from 'react'

type TotalItem = {
    totalPrice: number
}

const Main = () => {
    const [totalItem, setTotalItem] = useState<TotalItem>({
        totalPrice: 0,
    })

    const addTotal = (price: number) => {
        setTotalItem((prevState: TotalItem) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Our shop page
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                marginTop="50px"
                marginBottom="50px"
            >
                <Button variant="outlined">USD</Button>
                <Button variant="outlined">EUR</Button>
                <Button variant="outlined">UAH</Button>
                <Button variant="outlined">ZL</Button>
            </Grid>

            <PhoneList addTotal={addTotal} />
            <Typography
                variant="h4"
                component="h5"
                align="center"
                sx={{ marginTop: '30px' }}
            >
                Total: {totalItem.totalPrice}
            </Typography>
        </>
    )
}

export default Main
