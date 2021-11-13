declare interface Cart {
    id?: number
    timestamp?: number
    products: number[]
}

declare interface Product {
    name: string
    description: string
    code: number
    price: number
    thumbnail: string
    id?: number
    timestamp: number
    stock: number
}