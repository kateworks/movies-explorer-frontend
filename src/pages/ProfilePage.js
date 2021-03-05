import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => (
  <React.Fragment>
    <Header>
      <Navigation/>
    </Header>
    <Profile/>
  </React.Fragment>
);

export default ProfilePage;