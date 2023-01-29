import { useState } from 'react'
import Button from '@mui/material/Button'

type Props = {}

const ButtonChange = (props: Props) => {
    const [count, setCount] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <>
            <Button variant="outlined" onClick={onIncrementClick}>
                change count ({count})
            </Button>
        </>
    )
}

export default ButtonChange
