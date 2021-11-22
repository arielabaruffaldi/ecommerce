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
    // component: React.ElementType
    children?: React.ElementType | string | React.ReactNode
    disabled?: boolean
    classes?: string
}

const Button = ({ type = "primary", href, color = "", onClick, size, weight, disabled, children, classes, ...props }: ButtonProps) => {
    let CustomTag = onClick ? "button" : Link;
    return (
        <CustomTag
            to={`${href ? href : ""}`}
            className={
                `${styles.Button} ${classes ? classes : ""} ${styles[color]} ${styles[type]}`
            }
            onClick={onClick}
            {...props}
        >
            {children}
        </CustomTag>
    )
}

export default Button