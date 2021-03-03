import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import SavedMoviesPage from './SavedMoviesPage';
import NotFound from './NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin">

        </Route>

        <Route path="/signup">

        </Route>

        <Route path="/movies">
          <MoviesPage/>
        </Route>

        <Route path="/saved-movies">
          <SavedMoviesPage/>
        </Route>

        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
