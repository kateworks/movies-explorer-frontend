import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import HomePage from '../HomePage';
import Login from '../Login/Login';
import Register from '../Register';
import ProfilePage from '../ProfilePage';
import MoviesPage from '../MoviesPage';
import SavedMoviesPage from '../SavedMoviesPage';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  let history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/movies">
          <MoviesPage/>
        </Route>

        <Route path="/saved-movies">
          <SavedMoviesPage/>
        </Route>

        <Route path="/profile">
          <ProfilePage/>
        </Route>

        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="*">
          <NotFound history={history}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
