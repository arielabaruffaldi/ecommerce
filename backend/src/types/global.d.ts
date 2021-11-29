declare interface Cart {
    id?: number
    timestamp?: number
    products: number[]
}

declare interface Product {
    name: string
    description: string
    code: string
    price: string
    thumbnail: string
    id?: number
    timestamp?: string
    stock: string
    color: string
}