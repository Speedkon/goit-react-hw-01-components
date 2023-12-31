import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendList } from "./FriendList/friendlist";
import { TransactionHistory } from "./Transactions/transactions";
import data from '../data/data.json';
import user from "../data/user.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: 40,
        marginBottom: 40
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
