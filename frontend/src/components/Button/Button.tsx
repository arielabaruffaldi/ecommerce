import React, { FunctionComponent } from 'react';
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

interface ButtonProps {
    type?: string
    href?: string
    color?: string
    onClick?: () => void
    size?: string
    weight?: string
    children?: React.ElementType | string | React.ReactNode
    disabled?: boolean
    classes?: string
}


const Button = ({ type = "primary", href, color = "", onClick, size, weight, disabled, children, classes, ...props }: ButtonProps) => {
    return (
        onClick ?
            <button
                className={
                    `${styles.Button} ${classes ? classes : ""} ${styles[color]} ${styles[type]}`
                }
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
            </Link>
    )
}

export default Button