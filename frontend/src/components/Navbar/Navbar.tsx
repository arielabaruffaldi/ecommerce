import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import styles from "./NavBar.module.scss";
import { setCartItems } from '../../store/actions';
import { State } from "../../interfaces/state";
import { useSelector } from "react-redux";

const navItems = [
    {
        text: "Sets",
        href: "/sets",
    },
    {
        text: "Plantas",
        href: "/plantas"
    },
    {
        text: "Accesorios",
        href: "/accesorios",
    },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { cartItems } = useSelector((state: State) => state.cart);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    let navbarClasses = ["navbar"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }
    return (
        <header className={navbarClasses.join(" ")}>
            <nav>
                <NavLink to="/">
                    plant <span>it.</span>
                </NavLink>
                <ul className={styles.navLink}>
                    {navItems.map(function (item, key) {
                        return (
                            <li key={key}>
                                <NavLink to={item.href}>
                                    {item.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <ul className={styles.rightNav}>
                    <li>
                        <a href="#search">
                            <img src={search} alt="busqueda" width="15" />
                        </a>
                    </li>
                    <li>
                        <a href="#cuenta">Cuenta </a>
                    </li>
                    <li>
                        <NavLink to={"/cart"}>
                            <img src={cart} alt="carrito" width="50" />
                            <span>{cartItems.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
