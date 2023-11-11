function diagonalDifference(arr) {
  // Write your code here
  let sumLeft = 0;
  let sumRight = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sumLeft += arr[i][i];
    sumRight += arr[i][arrLength - 1 - i];
  }

  return Math.abs(sumLeft - sumRight);
}

diagonalDifference([
  [1, 1, 5],
  [4, 3, 5],
  [91, 3, 7],
]);
