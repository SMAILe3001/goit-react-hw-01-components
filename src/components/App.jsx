import { Profile } from './Profile/profile';
import { Statistics } from './statistics/statistics';
import user from 'database/user';
import data from 'database/data';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics text="Upload stats" stats={data} />
    </div>
  );
};
