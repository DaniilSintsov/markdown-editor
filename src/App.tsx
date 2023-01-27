import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
