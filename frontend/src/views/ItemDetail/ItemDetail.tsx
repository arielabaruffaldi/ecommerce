import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import ItemCount from '../../components/ItemCount/ItemCount';
import Button from './../../components/Button/Button';

import { State } from '../../interfaces/state';

import { getProductById, setCartItems, setCartId } from '../../store/actions';

import styles from "./ItemDetail.module.scss";

const ItemDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [count, setCount] = useState<number>(0);

    const { productDetail: product } = useSelector((state: State) => state.products);
    const { id: cartId } = useSelector((state: State) => state.cart);

    function onAdd(countComp: number) {
        setCount(countComp);
    }

    async function onAddToCart() {
        if (!cartId) {
            await dispatch(setCartId())
        }
        dispatch(setCartItems({
            thumbnail: product.thumbnail,
            description: product.description,
            name: product.name,
            id: product.id,
            price: product.price,
            quantity: count,
            code: product.code,
            color: product.color,
            stock: product.stock,
            timestamp: Date.now()
        }))
    }

    useEffect(() => {
        id && dispatch(getProductById(id));
    }, [id])


    return (
        <>
            <section className={`layout__container ${styles['ItemDetail']}`}>
                <img src={`/assets/img/${product.thumbnail}`} alt="foto producto" />
                <div className={styles.fichaDatos}>
                    <div className={styles.info}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className={styles.color}>color: <span>{product.color}</span></p>
                        <p className={styles.price}>{`$${product.price}`}</p>
                    </div>
                    <ItemCount
                        addCount={() => setCount(count + 1)}
                        removeCount={() => setCount(count - 1)}
                        onAdd={onAdd}
                        min={0}
                        max={10}
                        count={count}
                    >
                        <Button
                            classes={styles.addToCart}
                            disabled={count === 10 || count === 0}
                            onClick={() => onAddToCart()}
                            variation="secondary"
                        >
                            agregar al carrito {count} {count === 1 ? `item` : `items`}
                        </Button>
                    </ItemCount>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;