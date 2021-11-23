import getData from './utils/getData'
import setData from './utils/setData'
import path from 'path';
import Products from './Products'

const PUBLIC_PATH = path.join(__dirname, './', 'products.txt')
const products = new Products(PUBLIC_PATH)

const getItemInArray = (data: Cart[], id: number): any => {
    return data.find((item: Cart) => item.id === id)
}

class Carts {
    private file: string;

    constructor(file: string) {
        this.file = file;
    }

    async save(): Promise<number> {
        let data = await getData(this.file)
        const id = data.length + 1;
        // const productsPromise = cart.products.map(product => products.getById(product))
        try {
            // const carts = await Promise.all(productsPromise)
            const cart = {
                id: id,
                timestamp: Date.now(),
                products: []
            }
            await setData(this.file, [...data, cart])
            return id
        } catch (error) {
            let msg = (error as Error).message
            throw new Error(msg)
        }
    }

    async getById(id: number): Promise<Cart> {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            return itemInArray
        } else {
            throw new Error(`carrito con id ${id} no encontrado`)
        }
    }

    async getAll(): Promise<Cart> {
        return await getData(this.file)
    }

    async deleteById(id: number): Promise<string> {
        let data = await getData(this.file)
        if (getItemInArray(data, id)) {
            const newData = data.filter((item: Cart) => item.id !== id)
            await setData(this.file, newData)
            return "se elimino correctamente"
        } else {
            throw new Error(`carrito con id ${id} no encontrado`)
        }
    }

    async updateCart(id: number, body: number[]): Promise<any> {
        let data = await getData(this.file)
        const itemInArray: any = getItemInArray(data, id)
        const productsPromise = body.map(product => products.getById(product)
        )
        try {
            const product = await Promise.all(productsPromise)
            if (itemInArray) {
                itemInArray.products.push(...product)
            }
            const newData = data.filter((item: Product) => item.id !== id)
            await setData(this.file, [...newData, itemInArray])

            return itemInArray
        } catch (error) {
            let msg = (error as Error).message
            throw new Error(msg)
        }
    }

    async deleteProdInCart(cartId: number, productId: number): Promise<string> {
        let data = await getData(this.file)
        const newData = data.filter((item: Product) => item.id !== cartId)

        const itemInCart = getItemInArray(data, cartId)

        if (itemInCart) {
            const newCart = itemInCart.products.filter(item => item.id !== productId)
            itemInCart.products = newCart
            await setData(this.file, [...newData, itemInCart])
            return `se eliminó correctamente el producto ${productId} del carrito ${cartId}`
        } else {
            throw new Error(`carrito con id ${productId} no encontrado`)
        }
    }
}

export default Carts