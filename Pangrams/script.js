function pangrams(s) {
  // Write your code here

  let answer = `pangram`;
  const lettersArray = [];

  // Uppercase letters (A-Z)
  for (let i = 65; i <= 90; i++) {
    lettersArray.push(String.fromCharCode(i));
  }

  // Space character
  lettersArray.push(" ");

  // Lowercase letters (a-z)
  for (let i = 97; i <= 122; i++) {
    lettersArray.push(String.fromCharCode(i));
  }

  for (let i = 0; i < lettersArray.length; i++) {
    const regEx = new RegExp(`${lettersArray[i]}`, `gi`);
    if (!regEx.test(s)) answer = `not pangram`;
  }
  return answer;
}

pangrams(`We promptly judged antique ivory buckles for the next prize`);
