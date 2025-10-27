const pokedex = document.getElementById('pokedex');
const searchInput = document.getElementById('searchInput');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const loading = document.getElementById('loading');
const clearCacheBtn = document.getElementById('clearCacheBtn');

let allPokemons = [];
let filteredPokemons = [];
let currentPage = 1;
const pokemonsPerPage = 20;

const fallbackImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

function showLoading(show) {
  loading.style.display = show ? 'flex' : 'none';
  pokedex.style.display = show ? 'none' : 'flex';
}

clearCacheBtn?.addEventListener('click', () => {
  const confirmacao = confirm("Deseja realmente limpar o cache e recarregar os Pokémons?");
  if (confirmacao) {
    localStorage.removeItem('pokedex-gen1');
    localStorage.removeItem('pokedex-cache-date');
    location.reload();
  }
});

async function carregarPokemons() {
  showLoading(true);

  const cache = localStorage.getItem('pokedex-gen1');
  const cacheDate = localStorage.getItem('pokedex-cache-date');
  const expirou = cacheDate && (Date.now() - cacheDate > 7 * 24 * 60 * 60 * 1000);

  if (cache && !expirou) {
    allPokemons = JSON.parse(cache);
    filteredPokemons = allPokemons;
    showLoading(false);
    renderizarPokemons();
    return;
  }

  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const resposta = await fetch(url);
    const data = await resposta.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const detalhes = await res.json();

      const officialImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detalhes.id}.png`;

      let image = officialImg;
      const testImage = new Image();
      await new Promise(resolve => {
        testImage.onload = resolve;
        testImage.onerror = () => {
          image = detalhes.sprites.front_default || fallbackImage;
          resolve();
        };
        testImage.src = officialImg;
      });

      return {
        id: detalhes.id,
        name: detalhes.name,
        image,
        types: detalhes.types.map(t => t.type.name),
        weight: detalhes.weight / 10,
        height: detalhes.height / 10
      };
    });

    allPokemons = await Promise.all(promises);
    filteredPokemons = allPokemons;

    localStorage.setItem('pokedex-gen1', JSON.stringify(allPokemons));
    localStorage.setItem('pokedex-cache-date', Date.now());
  } catch (error) {
    console.error('Erro ao carregar pokémons:', error);
    pokedex.innerHTML = `<p>Erro ao carregar os Pokémons. Tente novamente mais tarde.</p>`;
  } finally {
    showLoading(false);
    renderizarPokemons();
  }
}

function garantirImagensCarregadas(pokemonsPagina) {
  const promises = pokemonsPagina.map(p => new Promise(resolve => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = p.image;
  }));
  return Promise.all(promises);
}

async function renderizarPokemons() {
  const start = (currentPage - 1) * pokemonsPerPage;
  const end = start + pokemonsPerPage;
  const pokemonsPagina = filteredPokemons.slice(start, end);

  showLoading(true);
  await garantirImagensCarregadas(pokemonsPagina);

  pokedex.innerHTML = pokemonsPagina.map(p => `
    <div class="pokemon">
      <img src="${p.image}" alt="${p.name}" 
           onerror="this.onerror=null;this.src='${fallbackImage}';" />
      <h3>#${p.id} ${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h3>
      <p><strong>Tipo:</strong> ${p.types.join(', ')}</p>
      <p><strong>Peso:</strong> ${p.weight} kg</p>
      <p><strong>Altura:</strong> ${p.height} m</p>
    </div>
  `).join('');

  const totalPaginas = Math.ceil(filteredPokemons.length / pokemonsPerPage) || 1;
  pageInfo.textContent = `Página ${currentPage} de ${totalPaginas}`;

  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPaginas;

  showLoading(false);
}

searchInput?.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();
  filteredPokemons = allPokemons.filter(p => p.name.includes(termo));
  currentPage = 1;
  renderizarPokemons();
});

prevPageBtn?.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderizarPokemons();
  }
});

nextPageBtn?.addEventListener('click', () => {
  const totalPaginas = Math.ceil(filteredPokemons.length / pokemonsPerPage);
  if (currentPage < totalPaginas) {
    currentPage++;
    renderizarPokemons();
  }
});

if (pokedex) carregarPokemons();
