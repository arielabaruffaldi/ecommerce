import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Cart.module.scss";
import { State } from "../../interfaces/state";

import Button from './../../components/Button/Button'
import Item from "../../components/Item/Item";

import { deleteItemInCart } from '../../store/actions';


const Cart = () => {
    const { products, id } = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();
    
    return <>
        <section className={`${styles.Cart} layout__container`}>
            <h1>Carrito de la compra</h1>
            {products.length < 1 ? (
                <>
                    <h2> no hay products</h2>
                    <Button>
                        <NavLink to={"/"}>ir a la home</NavLink>
                    </Button>
                </>
            ) :
                <>
                    <span>{products.length} articulos</span>
                    <ul className={styles.item_card_wrapper}>
                        {products.map(item =>
                            <Item
                                description={item.description}
                                code={item.code}
                                color={item.color}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                stock={item.stock}
                                thumbnail={`/assets/img/${item.thumbnail}`}
                                timestamp={item.timestamp}
                                key={item.id}
                                deleteAction={() => dispatch(deleteItemInCart(id, item.id))}
                                quantity={item.quantity}
                            />
                        )}
                    </ul>
                </>
            }
        </section>
    </>
}

export default Cart;