export const fetchChampionData = async (championName) => {
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.12.1/data/pt_BR/champion.json`);
  const data = await response.json();
  const champion = Object.values(data.data).find(champ => champ.id.toLowerCase() === championName.toLowerCase());

  if (!champion) return null;

  const fullDetailsResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.12.1/data/pt_BR/champion/${champion.id}.json`);
  const fullDetailsData = await fullDetailsResponse.json();

  return fullDetailsData.data[champion.id];
};




