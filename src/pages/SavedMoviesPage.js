import React from 'react';
import Header from '../components/Header/Header';
import SavedMovies from '../components/SavedMovies/SavedMovies';
import Footer from '../components/Footer/Footer';

const SavedMoviesPage = () => (
  <React.Fragment>
    <Header/>
    <SavedMovies/>
    <Footer/>
  </React.Fragment>
);

export default SavedMoviesPage;