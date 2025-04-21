
import React, { useState } from 'react';

const Searchingbar = ({ onSearch }) => {
  const [userInput, setUserInput] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Search term: ', userInput);
    onSearch(userInput);
    setUserInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='searchingbar'>
        <input
          type='text'
          name='user-search'
          value={userInput}
          onChange={handleChange}
          placeholder='input your search request...'
          required
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Searchingbar;
