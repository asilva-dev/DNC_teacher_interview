async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter os dados do Pokémon:', error);
        return null;
    }
}

async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; 
    const pokemonData = await fetchPokemonData(randomId);
    return pokemonData;
}

async function updatePokemonInfo() {
    const randomPokemonData = await getRandomPokemon();
    if (randomPokemonData) {
        const pokemonInfoElement = document.getElementById('pokemon-info');
        pokemonInfoElement.innerHTML = `
            <h2>Dados do Pokémon ${randomPokemonData.name}</h2>
            <p>ID: ${randomPokemonData.id}</p>
            <img src="${randomPokemonData.sprites.front_default}" alt="${randomPokemonData.name}">
        `;
    } else {
        console.log('Não foi possível obter os dados do Pokémon.');
    }
}

document.getElementById('change-pokemon-btn').addEventListener('click', function() {
    updatePokemonInfo();
});

updatePokemonInfo();
