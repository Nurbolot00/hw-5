import React, { useState } from 'react';
import Button from '../UI/button/Button';
import UserForm from '../user-form/UserForm';
import classes from './NewUser.module.css'

export  const NewUser = ({newUserAdd}) => {

    const [showForm, setShowForm] = useState(false)
   
    const showUserForm = () =>{
        setShowForm((prevState)=> {
            // console.log("djsfkljshlkf", !prevState);
           return !prevState

        } )
        // console.log("hadsfkjhaskd");
    }


    return (
        <div className={classes.newUser}>
            { showForm ? <UserForm newUserAdd={newUserAdd} onShowForm = {showUserForm}/> : <Button title="Добавить нового пользователя" onClick={showUserForm} />}
        </div>
    );
};