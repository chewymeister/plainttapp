const HomePlayer = {
  name: 'George',
  points: 0,
  games: 0
};
const AwayPlayer = {
  name: 'Patrick',
  points: 0,
  games: 0
};

function addPoint(element) {
  let wonThePoint;
  let lostThePoint;
  if (element.id === "myPoints") {
    wonThePoint = HomePlayer;
    lostThePoint = AwayPlayer;
  } else {
    wonThePoint = AwayPlayer;
    lostThePoint = HomePlayer;
  }
  wonThePoint.points += 1;
  element.innerHTML = wonThePoint.points;
  
 if (wonThePoint.points > 10 && (wonThePoint.points - lostThePoint.points) > 1) {
   wonThePoint.games += 1;
   element.nextElementSibling.innerHTML = wonThePoint.games;
   if (wonThePoint.games === 2) {
     document.getElementById('result').innerHTML = wonThePoint.name + ' wins!';
   } else {
     wonThePoint.points = 0;
     lostThePoint.points = 0;
     document.getElementById('myPoints').innerHTML = 0;
     document.getElementById('opponentsPoints').innerHTML = 0;
   }
 }
};