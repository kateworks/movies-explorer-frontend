import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import SavedMovies from '../components/SavedMovies/SavedMovies';
import Footer from '../components/Footer/Footer';

const SavedMoviesPage = () => (
  <React.Fragment>
    <Header>
      <Navigation/>
    </Header>
    <SavedMovies/>
    <Footer/>
  </React.Fragment>
);

export default SavedMoviesPage;