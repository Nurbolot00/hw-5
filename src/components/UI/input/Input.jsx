import React from 'react';
import classes from  './Input.module.css'

const Input = ({id,labelName,inputType,placeholder,...rest}) => {
    return (
        <div className={classes.container}>
            <label htmlFor={id}>{labelName}</label>
            <input type={inputType} placeholder={placeholder || '...' } id={id} {...rest}/>
        </div>
    );
};

export default Input;