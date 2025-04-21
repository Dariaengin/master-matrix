import React from 'react';
import Homepage from './components/pages/homepage'; // Capital H

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <header className='header-style'>
        <h1>Foursquare Demo</h1>
        <h2>Find your song</h2>
      </header>
      <main className='main-style'>
        <Homepage /> {/* Capital H here too */}
      </main>
    </div>
  );
}

export default App;
