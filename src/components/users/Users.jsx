import React from 'react';
import UserItem from '../user-item/UserItem';
import classes from  './Users.module.css'

const Users = ({users}) => {
    return (
        <ul className={classes.usersList}>
        {users.map((elem, index) => {
          return (
            <UserItem
              key={index}
              userName={elem.userName}
              userAge={elem.userAge}
            />
          );
        })}
      </ul>
    );
};

export default Users;