import { Profile } from './Profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friend-list';
import { TransactionHistory } from './friendList/transactionHistory/transactionHistory';
import user from 'database/user';
import data from 'database/data';
import friends from 'database/friends';
import transactions from 'database/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics text="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
