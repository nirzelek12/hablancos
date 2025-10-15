const lineupKey = 'rmLineup';
const lineup = JSON.parse(localStorage.getItem(lineupKey)) || [];

const rows = [
  document.getElementById('row-1'),
  document.getElementById('row-2'),
  document.getElementById('row-3'),
  document.getElementById('row-4')
];

// Map players to rows for 4-3-3
const rowMapping = [
  [lineup[0]],           // Goalkeeper
  lineup.slice(1,5),     // Defenders
  lineup.slice(5,8),     // Midfielders
  lineup.slice(8,11)     // Forwards
];

rowMapping.forEach((rowPlayers, rIndex) => {
  rowPlayers.forEach((player, i) => {
    const div = document.createElement('div');
    div.classList.add('player');
    div.innerHTML = `<img src="${player.img}" alt="${player.name}"><span>${player.name}</span>`;
    rows[rIndex].appendChild(div);
    setTimeout(() => {
      div.style.opacity = 1;
    }, (rIndex*3 + i)*500); // staggered fade-in
  });
});
