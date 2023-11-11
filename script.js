function miniMaxSum(arr) {
  const arrLength = arr.length;
  const sortedArr = arr.sort((a, b) => a - b); //* sort the array from the smallest to the highest
  let minValue = 0;
  let maxValue = 0;
  sortedArr.forEach((element) => {
    minValue += element;
    maxValue += element;
  });
  minValue = minValue - sortedArr[arrLength - 1];
  maxValue = maxValue - sortedArr[0];
  console.log(`${minValue} ${maxValue}`);
  console.log(sortedArr);
}

miniMaxSum([1, 3, 4, 5, 7]);
