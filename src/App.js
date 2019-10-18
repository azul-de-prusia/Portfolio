import React from 'react';
import logo from './logo.svg';
import './App.css';
import links from './components/links';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tegthyn Coral Quiñones Gutiérrez
        </p>
        <p>Front-End developer</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
      <BrowserRouter>
        <li type='circle'>
                    <Link to="/links">click here to open up the links to see some projects</Link>
                </li>
            <Route path="/links" component={links}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
