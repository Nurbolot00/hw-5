import React from 'react';
import classes from './Button.module.css'


const Button = (props) => {
    return (
        <button className={classes.btn} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    );
};

export default Button;