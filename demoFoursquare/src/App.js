
import React from 'react';

import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-style'>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
