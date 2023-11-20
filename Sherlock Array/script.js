/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
  // Write your code here
  let totalSum = arr.reduce((prev, current) => {
    return prev + current;
  }, 0);
  let leftSum = 0;
  let answer = `NO`;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    if (leftSum === totalSum) {
      answer = `YES`;
      break;
    }
    leftSum += arr[i];
  }
  console.log(answer);
}

balancedSums([1, 2, 3, 3]);
