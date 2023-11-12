function caesarCipher(s, k) {
  // Write your code here
  const answer = [];
  const originalString = s.split("");

  const createAlphabet = () => {
    const originalAlphabet = `abcdefghijklmnopqrstuvwxyz`.split("");
    const removedEle = originalAlphabet.slice(0, originalAlphabet.length);
    let newAlphabet = [...originalAlphabet];
    if (k / originalAlphabet.length > 1) {
      for (let i = 0; i < k / 2; i++) {
        newAlphabet = [...newAlphabet, ...removedEle];
      }
    } else {
      newAlphabet = [...newAlphabet, ...removedEle];
    }

    return newAlphabet;
  };
  const newAlphabet = createAlphabet();

  const createNewArray = (element) => {
    const regEx = new RegExp(
      `${element.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}`,
      `gi`
    );

    const newElement = newAlphabet.find((item) => item.match(regEx));
    const newElementIndex = newAlphabet.findIndex((item) => item.match(regEx));
    answer.push(!newElement ? element : newAlphabet[newElementIndex + k]);
  };

  originalString.forEach((element, index) => {
    createNewArray(element);
    if (element === element.toUpperCase())
      answer[index] = answer[index].toUpperCase();
  });

  console.log(answer.join(""));
  return answer.join("");
}

// caesarCipher(`www.abc.xy`, 87);
caesarCipher(
  `"DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy."`,
  45
);
