type Props = {
    id: number
    title: string
    desc: string
    currency: string
    price: number
}

const listArray: Props[] = [
    {
        id: 1,
        title: 'iPhone 12',
        desc: 'This is iPhone 12...',
        currency: 'EUR',
        price: 750,
    },
    {
        id: 2,
        title: 'iPhone 8',
        desc: 'This is iPhone 12...',
        currency: 'EUR',
        price: 850,
    },
    {
        id: 3,
        title: 'iPhone X',
        desc: 'This is iPhone 12...',
        currency: 'EUR',
        price: 1250,
    },
]

export default listArray
