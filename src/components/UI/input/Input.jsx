import React from 'react';
import './Input.css'

const Input = ({id,labelName,inputType,placeholder,...rest}) => {
    return (
        <div className='container'>
            <label htmlFor={id}>{labelName}</label>
            <input type={inputType} placeholder={placeholder || '...' } id={id} {...rest}/>
        </div>
    );
};

export default Input;