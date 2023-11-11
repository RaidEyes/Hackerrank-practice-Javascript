function twoArrays(k, A, B) {
  // Write your code here
  let answer = `YES`;
  const modifiedA = A.sort((a, b) => a - b);
  const modifiedB = B.sort((a, b) => b - a);
  for (let i = 0; i < modifiedA.length; i++) {
    if (modifiedA[i] + modifiedB[i] < k) answer = `NO`;
  }
  console.log(answer);
  return answer;
}
twoArrays(10, [1, 1, 2, 2], [3, 3, 3, 4]);
