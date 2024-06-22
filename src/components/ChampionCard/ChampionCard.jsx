import React from 'react';
import './championCard.css';

const ChampionCard = ({ champion }) => {
  if (!champion) return null;

  return (
    <div className="championCard">
      <h2>{champion.name}</h2>
      <p>{champion.title}</p>
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
      <p>{champion.blurb}</p>
    </div>
  );
};

export default ChampionCard;

