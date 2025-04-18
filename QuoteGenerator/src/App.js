import React from 'react';
import QuotesGenerator from './components/QuotesGenerator.js';
import Header from './components/layout/Header';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <QuotesGenerator />
    </div>
  );
};
export default App;