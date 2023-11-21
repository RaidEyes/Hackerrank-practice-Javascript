function counterGame(n) {
  // Write your code here
  let move = 0;
  while (n > 1) {
    let power = parseInt(Math.log2(n));
    let max = 2 ** power;
    if (n === max) {
      n = parseInt(n / 2);
    } else {
      n = n - max;
    }
    move++;
  }
  if (move % 2 === 0) {
    return "Richard";
  } else {
    return "Louise";
  }
}

counterGame(555555555);
