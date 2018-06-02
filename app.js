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

class Score {
  constructor() {
    this.pointsClass = 'pointsCount'
    this.gamesClass = 'gamesCount'
  }

  fetchPoints(currentPlayerId) {
    const selector = this.countSelector(currentPlayerId, this.pointsClass)
    return document.querySelector(selector)
  }

  updatePoints(currentPlayerId, points) {
    this.fetchPoints(currentPlayerId).innerHTML = points
  }

  updateGames(currentPlayerId, games) {
    this.fetchGames(currentPlayerId).innerHTML = games
  }

  fetchGames(currentPlayerId) {
    const selector = this.countSelector(currentPlayerId, this.gamesClass)
    return document.querySelector(selector)
  }

  announceVictoryFor(player) {
    document.getElementById('result').innerHTML = player + ' wins!';
  }

  disableAddPoint() {
    document.querySelectorAll('.pointsCount').forEach(function (element) {
      element.onclick = null
    })
  }

  resetAllPoints() {
    document.querySelectorAll('.pointsCount').forEach(function (element) {
      element.innerHTML = 0
    });
  }

  countSelector(currentPlayerId, scoreType) {
    return '.score.' + currentPlayerId + ' > .' + scoreType
  }
}

const players = {
  'home': new Player('George', 'home'),
  'away': new Player('Jon', 'away'),
};

score = new Score()

function addPoint(currentPlayerId, opponentId) {
  currentPlayer = players[currentPlayerId]
  opponent = players[opponentId]

  currentPlayer.points += 1
  score.updatePoints(currentPlayerId, currentPlayer.points)

  if (currentPlayer.wonGameAgainst(opponent)) {
    currentPlayer.games += 1;
    score.updateGames(currentPlayerId, currentPlayer.games)

    if (currentPlayer.wonTheMatch()) {
      score.announceVictoryFor(currentPlayer.name)
      score.disableAddPoint()

    } else {
      currentPlayer.points = 0;
      opponent.points = 0;
      score.resetAllPoints()
    }
  }
}
