function maxMin(k, arr) {
  // Write your code here
  const answer = [];

  const newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - k + 1; i++) {
    const minVal = newArr[i + k - 1] - newArr[i];
    answer.push(minVal);
  }
  console.log(newArr);
  console.log(Math.min(...answer));
  return Math.min(...answer);
}
maxMin(3, [100, 200, 300, 350, 400, 401, 402]);
