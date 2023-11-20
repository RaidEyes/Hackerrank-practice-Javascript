/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  // Create and calculate the initial sum of the array
  const initialArr = `${n}`.split("").map((item) => parseInt(item));
  const totalSum =
    initialArr.reduce((prev, current) => {
      return prev + current;
    }, 0) * k;

  let answer = 0;
  // return immediately if there's only 1 digit
  if (`${totalSum}`.length === 1) return (answer = totalSum);

  let numLength = `${totalSum}`.length;
  let newValue = totalSum;
  // while loop to constantly make a sum operation until there's 1 digit left
  while (numLength > 1) {
    const newArr = `${newValue}`;
    const newSum = newArr.split("").reduce((prev, current) => {
      return parseInt(prev) + parseInt(current);
    }, 0);
    numLength = `${newSum}`.length;
    newValue = newSum;
    answer = newValue;
  }

  // Write your code here
  console.log(newValue);
  return answer;
}

superDigit(148, 3);
