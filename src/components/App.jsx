import { Profile } from './Profile/profile';
import user from '../database/user';

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
    </div>
  );
};
