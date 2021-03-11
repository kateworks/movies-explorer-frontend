import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Profile from '../components/Profile/Profile';

const ProfilePage = (props) => (
  <React.Fragment>
    <Header>
      <Navigation/>
    </Header>
    <Profile onLogout={props.onLogout}/>
  </React.Fragment>
);

export default ProfilePage;