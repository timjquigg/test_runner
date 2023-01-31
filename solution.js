const solution1 = (A) => {
  let iterations = 0;
  const holder = Array(A.length + 1).fill(0);
  // const holder = [...new Array(A.length + 1)].map(() => 0);
  holder[0] = 1;
  for (const el of A) {
    iterations++;
    if (el > 0) {
      holder[el] = 1;
    }
  }
  const found = holder.indexOf(0);
  iterations = found < 0 ? iterations + holder.length : iterations + found;
  return found === -1 ? [holder.length, iterations] : [found, iterations];
};

const solution2 = (A) => {
  let iterations = 0;
  const sortedA = A.sort((a, b) => {
    iterations++;
    return b - a;
  });
  let i = 1;
  while (true) {
    iterations++;
    if (!sortedA.includes(i)) {
      // if (!A.includes(i)) {
      return [i, iterations];
    }
    i++;
  }
};

module.exports = { solution: solution2 };
