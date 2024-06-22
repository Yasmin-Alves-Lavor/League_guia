import axios from 'axios';

const API_URL = 'https://ddragon.leagueoflegends.com/cdn/14.12.1/data/pt_BR/champion.json';

export const fetchChampionData = async (championName) => {
  try {
    const response = await axios.get(API_URL);
    const championData = response.data.data;

    return Object.values(championData).find(champ => champ.name.toLowerCase() === championName.toLowerCase());
  } catch (error) {
    console.error('Error fetching champion data:', error);
    return null;
  }
};

