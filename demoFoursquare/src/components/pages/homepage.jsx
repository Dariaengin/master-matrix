
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import Searchingbar from '../Searchingbar';

const HomePage = () => {
  const [albums] = useFetch('https://jsonplaceholder.typicode.com/albums');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const handleUserSearch = (userInput) => {
    const trimmedInput = userInput.trim();

    if (trimmedInput) {
      const filtered = albums.filter((album) =>
        album.title.toLowerCase().includes(trimmedInput.toLowerCase())
      );
      setFilteredAlbums(filtered);
    } else {
      setFilteredAlbums([]);
    }
  };

  return (//filteredAlbums is an array of albums
    <div className='display-styles'>
      <Searchingbar onSearch={handleUserSearch} />
      {filteredAlbums.length ? <h2>Search results</h2> : null} 
      <ul>
        {filteredAlbums?.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
