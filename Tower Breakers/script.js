function towerBreakers(n, m) {
  // Write your code here
  // If the number of towers is odd or the tower height is 1, Player 1 wins
  if (m === 1 || n % 2 === 0) {
    return 2; // Player 2 wins
  } else {
    return 1; // Player 1 wins
  }
}

towerBreakers(2, 4);
