import React from 'react';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={style.friend_list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/1624/1624681.svg',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequried,
    }),
  ),
};

export default FriendList;
