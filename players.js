//createElement
function addPlayer(){
    const parent = document.getElementById('players');

    const newChild = document.createElement('div');
          newChild.classList.add('player');

    newChild.innerHTML = `
          <h4 class="player-name">Player - 4</h4>
          <p> Nemo consequatur, impedit voluptate excepturi dicta blanditiis consectetur praesentium autem omnis velit veritatis.</p>`;

    stylePoint(newChild);
    parent.appendChild(newChild);
}


//setCSS
function stylePoint(player) {
  player.style.border = '1px solid red';
  player.style.padding = '20px';
  player.style.margin = '30px';
  player.style.borderRadius = '20px';
}

const players = document.getElementsByClassName('player');
for (const player of players){
  stylePoint(player);
}


//setBgColor
document.getElementById('players').addEventListener('click', function(event){
    if (event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else {
      event.target.parentNode.style.backgroundColor = 'yellow';
    }
})