import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ChampionCard from '../../components/ChampionCard/ChampionCard';
import { fetchChampionData } from '../../services/api';
import './HomePage.css'

const HomePage = () => {
  const [champion, setChampion] = useState(null);

  const handleSearch = async (championName) => {
    const data = await fetchChampionData(championName);
    setChampion(data);
  };

  return (
    <div>
      <section className='Titulo'>
        <p className='linha_1'>DIGITE SEU</p>
        <p className='linha_2'>CAMPEÃO</p>
      </section>
      <SearchBar onSearch={handleSearch} />
      <ChampionCard champion={champion} />
    </div>
  );
};

export default HomePage;


