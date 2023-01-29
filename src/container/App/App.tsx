import CssBaseline from '@mui/material/CssBaseline'
import ButtonChange from 'components/ButtonChange/ButtonChange'
import { Grid } from '@mui/material'
import Main from 'container/Main/Main'

// type Props = {
//     id: number
//     title: string
//     desc: string
//     currency: string
//     price: number
// }

const App = () => {
    return (
        <>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                marginTop="100px"
                marginBottom="100px"
            >
                <ButtonChange />
                <ButtonChange />
                <ButtonChange />
            </Grid>
            <Main />
        </>
    )
}

export default App
