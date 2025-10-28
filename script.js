const POKEMONS = [
  {id:1,name:"Bulbasaur",types:["grass","poison"],weight:6.9,height:0.7},
  {id:2,name:"Ivysaur",types:["grass","poison"],weight:13.0,height:1.0},
  {id:3,name:"Venusaur",types:["grass","poison"],weight:100.0,height:2.0},
  {id:4,name:"Charmander",types:["fire"],weight:8.5,height:0.6},
  {id:5,name:"Charmeleon",types:["fire"],weight:19.0,height:1.1},
  {id:6,name:"Charizard",types:["fire","flying"],weight:90.5,height:1.7},
  {id:7,name:"Squirtle",types:["water"],weight:9.0,height:0.5},
  {id:8,name:"Wartortle",types:["water"],weight:22.5,height:1.0},
  {id:9,name:"Blastoise",types:["water"],weight:85.5,height:1.6},
  {id:10,name:"Caterpie",types:["bug"],weight:2.9,height:0.3},
  {id:11,name:"Metapod",types:["bug"],weight:9.9,height:0.7},
  {id:12,name:"Butterfree",types:["bug","flying"],weight:32.0,height:1.1},
  {id:13,name:"Weedle",types:["bug","poison"],weight:3.2,height:0.3},
  {id:14,name:"Kakuna",types:["bug","poison"],weight:10.0,height:0.6},
  {id:15,name:"Beedrill",types:["bug","poison"],weight:29.5,height:1.0},
  {id:16,name:"Pidgey",types:["normal","flying"],weight:1.8,height:0.3},
  {id:17,name:"Pidgeotto",types:["normal","flying"],weight:30.0,height:1.1},
  {id:18,name:"Pidgeot",types:["normal","flying"],weight:39.5,height:1.5},
  {id:19,name:"Rattata",types:["normal"],weight:3.5,height:0.3},
  {id:20,name:"Raticate",types:["normal"],weight:18.5,height:0.7},
  {id:21,name:"Spearow",types:["normal","flying"],weight:2.0,height:0.3},
  {id:22,name:"Fearow",types:["normal","flying"],weight:38.0,height:1.2},
  {id:23,name:"Ekans",types:["poison"],weight:6.9,height:2.0},
  {id:24,name:"Arbok",types:["poison"],weight:65.0,height:3.5},
  {id:25,name:"Pikachu",types:["electric"],weight:6.0,height:0.4},
  {id:26,name:"Raichu",types:["electric"],weight:30.0,height:0.8},
  {id:27,name:"Sandshrew",types:["ground"],weight:12.0,height:0.6},
  {id:28,name:"Sandslash",types:["ground"],weight:29.5,height:1.0},
  {id:29,name:"Nidoran♀",types:["poison"],weight:7.0,height:0.4},
  {id:30,name:"Nidorina",types:["poison"],weight:20.0,height:0.8},
  {id:31,name:"Nidoqueen",types:["poison","ground"],weight:60.0,height:1.3},
  {id:32,name:"Nidoran♂",types:["poison"],weight:9.0,height:0.5},
  {id:33,name:"Nidorino",types:["poison"],weight:19.5,height:0.9},
  {id:34,name:"Nidoking",types:["poison","ground"],weight:62.0,height:1.4},
  {id:35,name:"Clefairy",types:["fairy"],weight:7.5,height:0.6},
  {id:36,name:"Clefable",types:["fairy"],weight:40.0,height:1.3},
  {id:37,name:"Vulpix",types:["fire"],weight:9.9,height:0.6},
  {id:38,name:"Ninetales",types:["fire"],weight:19.9,height:1.1},
  {id:39,name:"Jigglypuff",types:["normal","fairy"],weight:5.5,height:0.5},
  {id:40,name:"Wigglytuff",types:["normal","fairy"],weight:12.0,height:1.0},
  {id:41,name:"Zubat",types:["poison","flying"],weight:7.5,height:0.8},
  {id:42,name:"Golbat",types:["poison","flying"],weight:55.0,height:1.6},
  {id:43,name:"Oddish",types:["grass","poison"],weight:5.4,height:0.5},
  {id:44,name:"Gloom",types:["grass","poison"],weight:8.6,height:0.8},
  {id:45,name:"Vileplume",types:["grass","poison"],weight:18.6,height:1.2},
  {id:46,name:"Paras",types:["bug","grass"],weight:5.4,height:0.3},
  {id:47,name:"Parasect",types:["bug","grass"],weight:29.5,height:1.0},
  {id:48,name:"Venonat",types:["bug","poison"],weight:30.0,height:1.0},
  {id:49,name:"Venomoth",types:["bug","poison"],weight:12.5,height:1.5},
  {id:50,name:"Diglett",types:["ground"],weight:0.8,height:0.2},
  {id:51,name:"Dugtrio",types:["ground"],weight:33.3,height:0.7},
  {id:52,name:"Meowth",types:["normal"],weight:4.2,height:0.4},
  {id:53,name:"Persian",types:["normal"],weight:32.0,height:1.0},
  {id:54,name:"Psyduck",types:["water"],weight:19.6,height:0.8},
  {id:55,name:"Golduck",types:["water"],weight:76.6,height:1.7},
  {id:56,name:"Mankey",types:["fighting"],weight:28.0,height:0.5},
  {id:57,name:"Primeape",types:["fighting"],weight:32.0,height:1.0},
  {id:58,name:"Growlithe",types:["fire"],weight:19.0,height:0.7},
  {id:59,name:"Arcanine",types:["fire"],weight:155.0,height:1.9},
  {id:60,name:"Poliwag",types:["water"],weight:12.4,height:0.6},
  {id:61,name:"Poliwhirl",types:["water"],weight:20.0,height:1.0},
  {id:62,name:"Poliwrath",types:["water","fighting"],weight:54.0,height:1.3},
  {id:63,name:"Abra",types:["psychic"],weight:19.5,height:0.9},
  {id:64,name:"Kadabra",types:["psychic"],weight:56.5,height:1.3},
  {id:65,name:"Alakazam",types:["psychic"],weight:48.0,height:1.5},
  {id:66,name:"Machop",types:["fighting"],weight:19.5,height:0.8},
  {id:67,name:"Machoke",types:["fighting"],weight:70.5,height:1.5},
  {id:68,name:"Machamp",types:["fighting"],weight:130.0,height:1.6},
  {id:69,name:"Bellsprout",types:["grass","poison"],weight:4.0,height:0.7},
  {id:70,name:"Weepinbell",types:["grass","poison"],weight:6.4,height:1.0},
  {id:71,name:"Victreebel",types:["grass","poison"],weight:15.5,height:1.7},
  {id:72,name:"Tentacool",types:["water","poison"],weight:45.5,height:0.9},
  {id:73,name:"Tentacruel",types:["water","poison"],weight:55.0,height:1.6},
  {id:74,name:"Geodude",types:["rock","ground"],weight:20.0,height:0.4},
  {id:75,name:"Graveler",types:["rock","ground"],weight:105.0,height:1.0},
  {id:76,name:"Golem",types:["rock","ground"],weight:300.0,height:1.4},
  {id:77,name:"Ponyta",types:["fire"],weight:30.0,height:1.0},
  {id:78,name:"Rapidash",types:["fire"],weight:95.0,height:1.7},
  {id:79,name:"Slowpoke",types:["water","psychic"],weight:36.0,height:1.2},
  {id:80,name:"Slowbro",types:["water","psychic"],weight:78.5,height:1.6},
  {id:81,name:"Magnemite",types:["electric","steel"],weight:6.0,height:0.3},
  {id:82,name:"Magneton",types:["electric","steel"],weight:60.0,height:1.0},
  {id:83,name:"Farfetch’d",types:["normal","flying"],weight:15.0,height:0.8},
  {id:84,name:"Doduo",types:["normal","flying"],weight:39.2,height:1.4},
  {id:85,name:"Dodrio",types:["normal","flying"],weight:85.2,height:1.8},
  {id:86,name:"Seel",types:["water"],weight:90.0,height:1.1},
  {id:87,name:"Dewgong",types:["water","ice"],weight:120.0,height:1.7},
  {id:88,name:"Grimer",types:["poison"],weight:30.0,height:0.9},
  {id:89,name:"Muk",types:["poison"],weight:30.0,height:1.2},
  {id:90,name:"Shellder",types:["water"],weight:4.0,height:0.3},
  {id:91,name:"Cloyster",types:["water","ice"],weight:132.5,height:1.5},
  {id:92,name:"Gastly",types:["ghost","poison"],weight:0.1,height:1.3},
  {id:93,name:"Haunter",types:["ghost","poison"],weight:0.1,height:1.6},
  {id:94,name:"Gengar",types:["ghost","poison"],weight:40.5,height:1.5},
  {id:95,name:"Onix",types:["rock","ground"],weight:210.0,height:8.8},
  {id:96,name:"Drowzee",types:["psychic"],weight:32.4,height:1.0},
  {id:97,name:"Hypno",types:["psychic"],weight:75.6,height:1.6},
  {id:98,name:"Krabby",types:["water"],weight:6.5,height:0.4},
  {id:99,name:"Kingler",types:["water"],weight:60.0,height:1.3},
  {id:100,name:"Voltorb",types:["electric"],weight:10.4,height:0.5},
  {id:101,name:"Electrode",types:["electric"],weight:66.6,height:1.2},
  {id:102,name:"Exeggcute",types:["grass","psychic"],weight:2.5,height:0.4},
  {id:103,name:"Exeggutor",types:["grass","psychic"],weight:120.0,height:2.0},
  {id:104,name:"Cubone",types:["ground"],weight:6.5,height:0.4},
  {id:105,name:"Marowak",types:["ground"],weight:45.0,height:1.0},
  {id:106,name:"Hitmonlee",types:["fighting"],weight:49.8,height:1.5},
  {id:107,name:"Hitmonchan",types:["fighting"],weight:50.2,height:1.4},
  {id:108,name:"Lickitung",types:["normal"],weight:65.5,height:1.2},
  {id:109,name:"Koffing",types:["poison"],weight:1.0,height:0.6},
  {id:110,name:"Weezing",types:["poison"],weight:9.5,height:1.2},
  {id:111,name:"Rhyhorn",types:["ground","rock"],weight:115.0,height:1.0},
  {id:112,name:"Rhydon",types:["ground","rock"],weight:120.0,height:1.9},
  {id:113,name:"Chansey",types:["normal"],weight:34.6,height:1.1},
  {id:114,name:"Tangela",types:["grass"],weight:35.0,height:1.0},
  {id:115,name:"Kangaskhan",types:["normal"],weight:80.0,height:2.2},
  {id:116,name:"Horsea",types:["water"],weight:8.0,height:0.4},
  {id:117,name:"Seadra",types:["water"],weight:25.0,height:1.2},
  {id:118,name:"Goldeen",types:["water"],weight:15.0,height:0.6},
  {id:119,name:"Seaking",types:["water"],weight:39.0,height:1.3},
  {id:120,name:"Staryu",types:["water"],weight:34.5,height:0.8},
  {id:121,name:"Starmie",types:["water","psychic"],weight:80.0,height:1.1},
  {id:122,name:"Mr. Mime",types:["psychic","fairy"],weight:54.5,height:1.3},
  {id:123,name:"Scyther",types:["bug","flying"],weight:56.0,height:1.5},
  {id:124,name:"Jynx",types:["ice","psychic"],weight:40.6,height:1.4},
  {id:125,name:"Electabuzz",types:["electric"],weight:30.0,height:1.1},
  {id:126,name:"Magmar",types:["fire"],weight:44.5,height:1.3},
  {id:127,name:"Pinsir",types:["bug"],weight:55.0,height:1.5},
  {id:128,name:"Tauros",types:["normal"],weight:88.4,height:1.4},
  {id:129,name:"Magikarp",types:["water"],weight:10.0,height:0.9},
  {id:130,name:"Gyarados",types:["water","flying"],weight:235.0,height:6.5},
  {id:131,name:"Lapras",types:["water","ice"],weight:220.0,height:2.5},
  {id:132,name:"Ditto",types:["normal"],weight:4.0,height:0.3},
  {id:133,name:"Eevee",types:["normal"],weight:6.5,height:0.3},
  {id:134,name:"Vaporeon",types:["water"],weight:29.0,height:1.0},
  {id:135,name:"Jolteon",types:["electric"],weight:24.5,height:0.8},
  {id:136,name:"Flareon",types:["fire"],weight:25.0,height:0.9},
  {id:137,name:"Porygon",types:["normal"],weight:36.5,height:0.8},
  {id:138,name:"Omanyte",types:["rock","water"],weight:7.5,height:0.4},
  {id:139,name:"Omastar",types:["rock","water"],weight:35.0,height:1.0},
  {id:140,name:"Kabuto",types:["rock","water"],weight:11.5,height:0.5},
  {id:141,name:"Kabutops",types:["rock","water"],weight:40.5,height:1.3},
  {id:142,name:"Aerodactyl",types:["rock","flying"],weight:59.0,height:1.8},
  {id:143,name:"Snorlax",types:["normal"],weight:460.0,height:2.1},
  {id:144,name:"Articuno",types:["ice","flying"],weight:55.4,height:1.7},
  {id:145,name:"Zapdos",types:["electric","flying"],weight:52.6,height:1.6},
  {id:146,name:"Moltres",types:["fire","flying"],weight:60.0,height:2.0},
  {id:147,name:"Dratini",types:["dragon"],weight:3.3,height:1.8},
  {id:148,name:"Dragonair",types:["dragon"],weight:16.5,height:4.0},
  {id:149,name:"Dragonite",types:["dragon","flying"],weight:210.0,height:2.2},
  {id:150,name:"Mewtwo",types:["psychic"],weight:122.0,height:2.0},
  {id:151,name:"Mew",types:["psychic"],weight:4.0,height:0.4}
];

// ======== Interface, busca e paginação (idêntico ao anterior) ========
const grid=document.getElementById('grid'),
searchInput=document.getElementById('searchInput'),
typeFilter=document.getElementById('typeFilter'),
emptyEl=document.getElementById('empty'),
prevBtn=document.getElementById('prevPage'),
nextBtn=document.getElementById('nextPage'),
pageInfo=document.getElementById('pageInfo'),
clearCacheBtn=document.getElementById('clearCache');

let perPage=24,currentPage=1;
const typeSet=new Set();
POKEMONS.forEach(p=>p.types.forEach(t=>typeSet.add(t)));
[...typeSet].sort().forEach(t=>{
  const opt=document.createElement('option');
  opt.value=t;
  opt.textContent=t.charAt(0).toUpperCase()+t.slice(1);
  typeFilter.appendChild(opt);
});

function makeBadge(type){
  const span=document.createElement('span');
  span.className='type t-'+type;
  span.textContent=type;
  return span;
}

function render(items){
  grid.innerHTML='';
  if(!items.length){emptyEl.style.display='block';pageInfo.textContent='Page 0 of 0';return;}
  emptyEl.style.display='none';
  items.forEach(p=>{
    const card=document.createElement('article');
    card.className='card';
    const imgPath=`midias/pokemons/${p.id}.png`;
    card.innerHTML=`
      <div class="thumb"><img src="${imgPath}" alt="#${p.id} - ${p.name}" loading="lazy"
        onerror="this.style.opacity=.35;this.parentElement.style.filter='grayscale(60%)'"></div>
      <h3>#${p.id} - ${p.name}</h3>
      <div class="meta">
        <div class="types"></div>
        <div style="margin-top:8px;color:var(--muted);font-size:13px">
          Type: ${p.types.join(', ')}<br>
          Weight: ${p.weight} kg<br>
          Height: ${p.height} m
        </div>
      </div>`;
    const tdiv=card.querySelector('.types');
    p.types.forEach(t=>tdiv.appendChild(makeBadge(t)));
    grid.appendChild(card);
  });
}

function applyFilters(){
  const q=searchInput.value.toLowerCase(),type=typeFilter.value;
  let f=POKEMONS.filter(p=>(!q||p.name.toLowerCase().includes(q)||String(p.id).includes(q))&&(!type||p.types.includes(type)));
  const totalPages=Math.max(1,Math.ceil(f.length/perPage));
  if(currentPage>totalPages)currentPage=totalPages;
  const start=(currentPage-1)*perPage;
  render(f.slice(start,start+perPage));
  pageInfo.textContent=`Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled=currentPage<=1;
  nextBtn.disabled=currentPage>=totalPages;
}

searchInput.addEventListener('input',()=>{currentPage=1;applyFilters()});
typeFilter.addEventListener('change',()=>{currentPage=1;applyFilters()});
prevBtn.addEventListener('click',()=>{if(currentPage>1){currentPage--;applyFilters()}});
nextBtn.addEventListener('click',()=>{currentPage++;applyFilters()});
clearCacheBtn.addEventListener('click',()=>{searchInput.value='';typeFilter.value='';currentPage=1;applyFilters();});

applyFilters();
