import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import JokeProvider from './providers/JokeProvider';
import { Categories } from './components/Categories';
import { NavBar } from './components/NavBar';

ReactDOM.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
        <JokeProvider>
          <div className="container-fluid">
            <NavBar/>
            <App />
            <Categories/>
          </div>
        </JokeProvider>
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
