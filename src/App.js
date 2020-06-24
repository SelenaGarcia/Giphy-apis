import React from 'react';
import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home'
import SearchResults from './pages/SeachResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

export default function App() {
  return (
    <StaticContext.Provider>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt='Giffy logo' src='/logo.png' />
          </Link>
          <GifsContextProvider>
            <h1> Apps </h1>
            <Route
              path="/"
              component={Home} />
            <Route
              path="/search/:keyword"
              component={SearchResults} />
            <Route
              path="/gif/:id"
              component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

