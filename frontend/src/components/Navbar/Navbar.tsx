import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import cartImg from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import styles from "./NavBar.module.scss";
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
    const { products } = useSelector((state: State) => state.cart);
    let navbarClasses = ["navbar"];

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
                            <img src={cartImg} alt="carrito" width="50" />
                            <span>{products?.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
