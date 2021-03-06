import React from 'react';

import Profile from './components/Profile';
import user from './user.json';
import Statistical from './components/Statistical';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList.jsx';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      {' '}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title="Upload stats" stats={statisticalData} />
      <Statistical stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> ;
    </>
  );
};

export default App;
