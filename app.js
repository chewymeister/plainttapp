class Player {
  constructor(name, id) {
    this.name = name;
    this.points = 0;
    this.games = 0;
  }

  wonGameAgainst(opponent) {
    return this.points > 10 && (this.points - opponent.points) > 1
  }

  wonTheMatch() {
    return this.games === 3
  }
}

const players = {
  'home': new Player('George', 'home'),
  'away': new Player('Jon', 'away'),
};

function addPoint(currentPlayerId, opponentId) {
  currentPlayer = players[currentPlayerId]
  opponent = players[opponentId]

  currentPlayerPointsCount = document.querySelector('.pointsContainer.' + currentPlayerId + ' > .pointsCount')
  currentPlayerGamesCount = document.querySelector('.pointsContainer.' + currentPlayerId + ' > .gamesCount')

  currentPlayer.points += 1
  currentPlayerPointsCount.innerHTML = currentPlayer.points

  if (currentPlayer.wonGameAgainst(opponent)) {
    currentPlayer.games += 1;
    currentPlayerGamesCount.innerHTML = currentPlayer.games;

    if (currentPlayer.wonTheMatch()) {
      document.getElementById('result').innerHTML = currentPlayer.name + ' wins!';
      document.querySelectorAll('.pointsCount').forEach(function (element) {
        element.onclick = null
      })

    } else {
      currentPlayer.points = 0;
      opponent.points = 0;
      document.querySelectorAll('.pointsCount').forEach(function (element) {
        element.innerHTML = 0
      });
    }
  }
}