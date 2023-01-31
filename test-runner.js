const { tests } = require("./test-input");
const { solution } = require("./solution");

const durations = [];
const iterations = [];
for (let i = 0; i < 1000; i++) {
  const start = performance.now();
  for (const test of tests) {
    const answer = solution(test[0]);
    iterations.push(answer[1]);
  }
  const finish = performance.now();
  durations.push(finish - start);
}

const averageTime =
  durations.reduce((curr, prev) => curr + prev, 0) / durations.length;
const averageIterations =
  iterations.reduceRight((curr, prev) => curr + prev, 0) / iterations.length;

// console.log(times);
console.log(
  `${tests.length} tests completed in average time of ${averageTime} ms, with average iterations of ${averageIterations}.`
);
