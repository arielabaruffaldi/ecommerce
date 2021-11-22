import { Product } from "./products";

interface ProductReducer{
    products: Product[]
    productDetail: Product
}

interface CartReducer{
    count: number
    cartItems: Product[]
}


export interface State {
    products: ProductReducer,
    cart: CartReducer
}