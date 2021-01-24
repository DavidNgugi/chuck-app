import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { JokeByCategory } from './components/JokeByCategory';
import { JokeCard } from './components/JokeCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={JokeCard} />
        <Route path="/jokes/category/:category" component={JokeByCategory} />
      </Switch>
    </div>
  );
}

export default App;
