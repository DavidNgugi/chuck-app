import React from 'react';
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="App-header" style={{ backgroundColor: '#fff'}} >
      <div className="p-3 col-md-6">
      <img src="../images/chuck_norris.jpeg" style={{ borderRadius: '50%'}} alt="Chuck Norris" />
      <p style={{ color: '#333'}}>
        { props.loading ? 'Loading...' : props.joke }
      </p>
      <a href="#" className="btn btn-primary m-2" onClick={() => props.refresh()}>
        Refresh
      </a></div>
    </header>
  );
};