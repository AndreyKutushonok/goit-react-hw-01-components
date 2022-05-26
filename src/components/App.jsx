import Profile from './profile/Profile'
import user from './profile/user.json'
import Statistics  from './statistics/Statistics';
import data from './statistics/data.json'
import FriendList from './friendsList/FriendsList'
import friends from './friendsList/friends.json'
import TransactionHistory from './transactionHistory/TransactionHistory'
import transactions from './transactionHistory/transactions.json'
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
