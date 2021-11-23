import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Cart.module.scss";
import { State } from "../../interfaces/state";

import Button from './../../components/Button/Button'
import Item from "../../components/Item/Item";

const Cart = () => {
    const { items } = useSelector((state: State) => state.cart);

    return <>
        <section className={`${styles.Cart} layout__container`}>
            <h1>Carrito de la compra</h1>
            {items.length < 1 ? (
                <>
                    <h2> no hay items</h2>
                    <Button>
                        <NavLink to={"/"}>ir a la home</NavLink>
                    </Button>
                </>
            ) :
                <>
                    <span>{items.length} articulos</span>
                    <ul className={styles.item_card_wrapper}>
                        {items.map(item =>
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
                                deleteAction={() => console.log("deleteProd")}
                            />
                        )}
                    </ul>
                </>
            }
        </section>
    </>
}

export default Cart;