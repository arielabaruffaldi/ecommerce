import express, { Request, Response } from 'express';
import Carts from '../services/Carts'
import path from 'path';

const PUBLIC_PATH = path.join(__dirname, '../', 'carts.txt')

const carts = new Carts(PUBLIC_PATH)

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const request = await carts.save()
        res.status(201).json({ message: 'se creo correctamente el carrito', cartId: request })
    } catch (error) {
        let msg = (error as Error).message;
        return res.status(400).json({ error: msg });
    }
})

router.delete('/:id', async (req: Request, res: Response) => {
    const {
        params: { id }
    } = req
    try {
        const response = await carts.deleteById(Number(id))
        res.json(response)
    } catch (error) {
        let msg = (error as Error).message;
        return res.status(400).json({ error: msg });
    }
});

router.get('/:id/productos', async (req: Request, res: Response) => {
    const {
        params: { id }
    } = req
    try {
        const { products } = await carts.getById(Number(id))
        res.json(products)
    } catch (error) {
        let msg = (error as Error).message;
        return res.status(400).json({ error: msg });
    }
});

router.post('/:id/productos', async (req: Request, res: Response) => {
    const { body: { products }, params: { id } } = req
    try {
        const request = await carts.updateCart(
            Number(id),
            products
        )
        res.status(201).json(request)
    } catch (error) {
        let msg = (error as Error).message;
        return res.status(400).json({ error: msg });
    }
});

router.delete('/:id/productos/:id_prod', async (req: Request, res: Response) => {
    const {
        params: { id, id_prod }
    } = req
    try {
        const response = await carts.deleteProdInCart(Number(id), Number(id_prod))
        res.json(response)
    } catch (error) {
        let msg = (error as Error).message;
        return res.status(400).json({ error: msg });
    }
});


export default router;
