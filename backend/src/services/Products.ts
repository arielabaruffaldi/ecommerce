import knex from './../db';
import moment from 'moment';
import setData from '../utils/setData'


class Products {
    private file: string;

    constructor(file: string) {
        this.file = file;
    }

    async addProduct(product: Product): Promise<number[]> {
        product.timestamp = moment().format('DD/MM/YYYY h:mm:ss a');
        const response = await knex("products").insert(product)
        return response
    }

    async getById(id: number | undefined): Promise<any> {
        const data = await knex.from("products")
            .where({ id: id })
        return data
    }

    async getAll(): Promise<Product> {
        return await knex.from("products")
    }

    async deleteById(id: number): Promise<number> {
        /* let data = await knex.from("products")
        getItemInArray(data, id) */
        const data = await knex("products")
            .where({ id: id })
            .del()
        return data
    }

    async updateProduct(id: number, body: Product): Promise<number> {
        const data = await knex("products")
            .where({ id: id })
            .update(body)
        return data
    }
}

export default Products