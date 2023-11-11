function lonelyInt(arr) {
  let inputArr = [...arr];
  const arrString = arr.join(" ");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    const removedEle = inputArr[i];
    const regEx = new RegExp(`\\b${removedEle}\\b`, `g`);
    if (arrString.match(regEx).length === 1) answer.push(inputArr[i]);
  }
  console.log(answer[0]);
  return answer[0];
}

lonelyInt([1, 1, 4, 5, 5]);
