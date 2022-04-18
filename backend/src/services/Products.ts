import getData from '../utils/getData'
import setData from '../utils/setData'

const getItemInArray = (data: Product[], id: number | undefined) => {
    return data.find((item: Product) => item.id === id)
}

class Products {
    private file: string;

    constructor(file: string) {
        this.file = file;
    }

    async save(product: Product): Promise<number> {
        let data = await getData(this.file)
        const id = data.length + 1;
        await setData(this.file, [...data, { ...product, id: id }])
        return id
    }

    async getById(id: number | undefined): Promise<Product> {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            return itemInArray
        } else {
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async getAll(): Promise<Product> {
        return await getData(this.file)
    }

    async deleteById(id: number): Promise<string> {
        let data = await getData(this.file)
        if (getItemInArray(data, id)) {
            const newData = data.filter((item: Product) => item.id !== id)
            await setData(this.file, newData)
            return "se elimino correctamente"
        } else {
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async updateProduct(id: number, body: Product): Promise<Product> {
        let data = await getData(this.file)
        const itemInArray = getItemInArray(data, id)
        if (itemInArray) {
            if (body.name) itemInArray['name'] = body.name
            if (body.price) itemInArray['price'] = body.price
            if (body.thumbnail) itemInArray['thumbnail'] = body.thumbnail
            const newData = data.filter((item: Product) => item.id !== id)
            await setData(this.file, [...newData, itemInArray])
            return itemInArray
        } else {
            throw new Error(`producto con id ${id} no encontrado`)
        }
    }

    async deleteAll() {
        await setData(this.file, [])
    }
}

export default Products