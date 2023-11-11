function matchingStrings(strings, queries) {
  // Write your code here
  let result = [];
  const testString = strings.join(" ");
  queries.forEach((element) => {
    const regEx = new RegExp(`\\b${element}\\b`, `g`);
    if (testString.match(regEx)) result.push(testString.match(regEx).length);
    if (!testString.match(regEx)) result.push(0);
    console.log(regEx);
  });
  return result;
}

matchingStrings([`aba`, `baba`, `aba`, `xzxb`], [`aba`, `xzxb`, `ab`]);
