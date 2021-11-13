import express from 'express';
import productRouter from './products';
import cartRouter from './cart';


const router = express.Router()

router.use('/api/productos', productRouter);
router.use('/api/carrito', cartRouter);

export default router;