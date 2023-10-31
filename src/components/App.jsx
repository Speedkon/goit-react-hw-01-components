import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendList } from "./FriendList/friendlist";
import data from './Statistics/data.json';
import user from "./Profile/user.json";
import friends from "./FriendList/friends.json";
import 'modern-normalize';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
