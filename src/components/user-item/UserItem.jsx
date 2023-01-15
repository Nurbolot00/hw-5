import React from 'react';
import classes from  './UserItem.module.css'


const UserItem = ({userName,userAge}) => {
    return (
        <div className={classes.userItem}>
            <p className={classes.itemInfo}>{userName} ({userAge} years old)</p>
            
        </div>
    );
};

export default UserItem;