import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ChampionCard from '../../components/ChampionCard/ChampionCard';
import { fetchChampionData } from '../../services/api';

const HomePage = () => {
  const [champion, setChampion] = useState(null);

  const handleSearch = async (championName) => {
    const data = await fetchChampionData(championName);
    setChampion(data);
  };

  return (
    <div>
      <h1>League of Legends</h1>
      <SearchBar onSearch={handleSearch} />
      <ChampionCard champion={champion} />
    </div>
  );
};

export default HomePage;
