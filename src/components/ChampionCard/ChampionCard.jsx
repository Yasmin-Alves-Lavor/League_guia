import React from 'react';
import './championCard.css';

const ChampionCard = ({ champion }) => {
  if (!champion) return null;

  return (
    <div className="championCard">
      <div className="championInfo">
        <img className="championImage" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
        <div className="championDetails">
          <h2 className="championName">{champion.name}</h2>
          <p className="championTitle">{champion.title}</p>
          <p className="championBlurb">{champion.blurb}</p>
        </div>
      </div>
      {champion.spells ? (
        <div className="championAbilities">
          {champion.spells.map((spell, index) => (
            <div key={index} className="championAbility">
              <img className="abilityImage" src={`http://ddragon.leagueoflegends.com/cdn/14.12.1/img/spell/${spell.image.full}`} alt={spell.name} />
              <div className="abilityDetails">
                <p className="abilityName">{spell.name}</p>
                <p className="abilityDescription">{spell.description}</p>
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








