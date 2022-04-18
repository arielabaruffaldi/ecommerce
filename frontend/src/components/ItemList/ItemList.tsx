import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from './../../store/actions';
import { State } from "../../interfaces/state";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";


const ItemList = () => {
    const { products } = useSelector((state: State) => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(id)
        dispatch(getProducts(id));
    }, [id]);

    return (
        <section className={styles['ItemList--container']}>
            <ul className={styles['ItemList--wrapper']}>
                {products.map(product =>
                    <Item
                        id={product.id}
                        code={product.code}
                        name={product.name}
                        stock={product.stock}
                        timestamp={product.timestamp}
                        thumbnail={`/assets/img/${product.thumbnail}`}
                        price={product.price}
                        key={product.id}
                        color={product.color}
                        description={product.description}
                    />
                )}
            </ul>
        </section>
    );

}

export default ItemList;