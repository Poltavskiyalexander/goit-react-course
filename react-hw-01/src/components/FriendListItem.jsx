import React from 'react';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li className={style.item} key={id}>
        <span
          className={`${style.status} ${
            isOnline ? style.style_true : style.style_false
          }`}
        ></span>
        <img className={style.avatar} src={avatar} alt="" width="48" />
        <p className={style.name}>{name}</p>
      </li>
    </>
  );
};

export default FriendListItem;
