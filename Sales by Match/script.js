function sockMerchant(n, ar) {
  // Write your code here
  let answer = 0;

  function getValue(ar) {
    const sortedArr = ar.sort((a, b) => a - b);
    const setArr = new Set([...sortedArr]);
    const uniqueType = [...setArr];
    return uniqueType;
  }

  const uniqueTypeArr = getValue(ar);

  uniqueTypeArr.forEach((item) => {
    const inputString = ar.join(" ");
    const regEx = new RegExp(`\\b${item}\\b`, `g`);
    const arr = inputString.match(regEx);
    answer +=
      arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);
  });

  console.log(answer);
  return answer;
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
