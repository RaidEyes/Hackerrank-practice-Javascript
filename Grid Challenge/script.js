function gridChallenge(grid) {
  // Write your code here

  const newArr = [];

  const rowCheck = (element) => {
    const sortedEle = element.split("").sort().join("");
    newArr.push(sortedEle.split(""));
  };

  const columnCheck = () => {
    let answer = `YES`;
    newArr.forEach((item, index) => {
      const columnArr = [];
      for (let i = 0; i < item.length; i++) {
        columnArr.push(newArr[i][index]);
        if (columnArr.join("") != columnArr.sort().join(""))
          return (answer = `NO`);
      }
    });
    // console.log(answer);
    return answer;
  };

  grid.forEach((element) => {
    rowCheck(element);
  });

  console.log(columnCheck());

  return columnCheck();
}

gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]);
