import React from 'react';
import { Route } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
import './App.css';

function App() {
  return (
    <>
      <Route component={GraphPage} path={'/graph/:tag'}/>
    </>
  );
}

export default App;
