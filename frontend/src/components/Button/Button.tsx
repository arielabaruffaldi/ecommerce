import React, { FunctionComponent } from 'react';
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

interface ButtonProps {
    variation?: string
    type?: "button" | "submit" | "reset" | undefined
    href?: string
    color?: string
    onClick?: () => void
    size?: string
    weight?: string
    children?: React.ElementType | string | React.ReactNode
    disabled?: boolean
    classes?: string
    tag?: string
}


const Button = ({ tag = "button", variation = "primary", type = 'button', href, color = "", onClick, size, weight, disabled, children, classes, ...props }: ButtonProps) => {
    let CustomTag: any = tag === 'Link' ? Link : tag;
    return (
        <CustomTag
            className={
                `${styles.Button} ${classes ? classes : ""} ${styles[color]} ${styles[variation]}`
            }
            type={type}
            onClick={onClick && onClick}
            disabled={disabled}
            to={`${href ? href : ""}`}
            {...props}
        >
            {children}
        </CustomTag>
        /* type ?
            <button
                className={
                    `${styles.Button} ${classes ? classes : ""} ${styles[color]} ${styles[variation]}`
                }
                type={type}
                onClick={onClick}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
            :
            <Link
                to={`${href ? href : ""}`}
                {...props}
            >
                {children}
            </Link> */
    )
}

export default Button