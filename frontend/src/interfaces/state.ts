import { Cart } from "./carts";
import { Product } from "./products";

interface ProductReducer{
    products: Product[]
    productDetail: Product
}


export interface State {
    products: ProductReducer,
    cart: Cart
}