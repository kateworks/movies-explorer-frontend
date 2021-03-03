import React from 'react';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

const MoviesPage = () => (
  <React.Fragment>
    <Header/>
    <Movies/>
    <Footer/>
  </React.Fragment>
);

export default MoviesPage;