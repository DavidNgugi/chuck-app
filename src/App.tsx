import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import { JokeByCategory } from './components/JokeByCategory';
import { JokeCard } from './components/JokeCard';

function App() {
  return (
    <div className="row App">
      <Switch>
        <Route exact path="/" component={JokeCard} />
        <Route path="/jokes/:category" component={JokeByCategory} />
      </Switch>
    </div>
  );
}

export default App;
