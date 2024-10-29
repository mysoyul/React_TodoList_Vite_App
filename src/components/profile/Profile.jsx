import React from 'react';
import { useParams } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  dan: {
    name: 'Dan Abramov',
    description: 'Reactjs 만든 개발자'
  },
  evan: {
    name: 'Evan You',
    description: 'Vuejs 만든 개발자'
  }
};

const Profile = () => {
  const { username } = useParams();
  console.log(username);
  
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
//export default withRouter(Profile);