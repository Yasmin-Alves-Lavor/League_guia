import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=""
      />
      <button onClick={handleSearch} className='botão_pesquisa'>BUSCAR</button>
    </div>
  );
};

export default SearchBar;

