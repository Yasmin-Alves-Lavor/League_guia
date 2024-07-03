import React from 'react';
import './championCard.css';

const ChampionCard = ({ champion }) => {
  if (!champion) return null;

  return (
    <div className="champion-card">
      <div className="champion-image-container">
        <img 
          className="champion-image" 
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} 
          alt={champion.name} 
        />
      </div>
      <div className="champion-details">
        <h2 className="champion-name">{champion.name}</h2>
        <p className="champion-title">{champion.title}</p>
      </div>
      {champion.spells ? (
        <div className="champion-abilities">
          {champion.spells.map((spell, index) => (
            <div key={index} className="champion-ability">
              <img 
                className="ability-image" 
                src={`http://ddragon.leagueoflegends.com/cdn/14.12.1/img/spell/${spell.image.full}`} 
                alt={spell.name} 
              />
              <div className="ability-details">
                <p className="ability-name">{spell.name}</p>
                <p className="ability-description">{spell.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No abilities found.</p>
      )}
    </div>
  );
};

export default ChampionCard;










