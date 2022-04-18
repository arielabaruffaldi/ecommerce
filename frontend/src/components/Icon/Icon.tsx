import React, { FC } from 'react'
import * as IconMUI from '@mui/icons-material';
import { Box } from '@mui/material';
import { IconProps } from './types';

import styles from './styles.module.scss';

const Icon = ({ name, backgroundColor = "transparent", color = "secondary", className = "", onClick }: IconProps) => {
    const Icons = IconMUI as any;
    const Component = Icons[name]
    return (
        <Box onClick={onClick && onClick} className={`${styles[`background--${backgroundColor}`]} ${className}`} >
            {Component && <Component color={color} />}
        </Box>
    )
}

export default Icon