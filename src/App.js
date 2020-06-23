import React from 'react';
import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home'
import SearchResults from './pages/SeachResults'
import Detail from './pages/Detail'


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1> Apps </h1>
        <Route 
        path="/" 
        component={Home}/>
        <Route 
        path="/search/:keyword" 
        component={SearchResults}/>
        <Route 
        path="/gif/:id" 
        component={Detail}/>
      </section>
    </div>
  );
}

