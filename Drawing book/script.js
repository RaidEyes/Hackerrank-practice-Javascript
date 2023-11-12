function pageCount(n, p) {
  // Write your code here
  let flipFromStart = Math.floor(p / 2);
  let flipFromEnd = Math.floor(n / 2 - flipFromStart);
  const pageToFlip = Math.floor(n / 2);

  let count = 0;
  const book = Array(n).fill(0);
  for (let i = 0; i < book.length; i++) {
    book[i] = count + 1;
    count++;
  }

  if (p === n) return 0;
  return p <= pageToFlip ? flipFromStart : flipFromEnd;
}

pageCount(6, 2);
