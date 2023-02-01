const { tests } = require("./test-input");
const { solution } = require("./solution");
const chalk = require("chalk");
const log = console.log;

const NUMBER_OF_ITERATIONS = 1000;
const durations = [];

const errors = [];

for (let i = 0; i < NUMBER_OF_ITERATIONS; i++) {
  const start = performance.now();
  for (const test of tests) {
    const answer = solution(...test.params);
    if (i === 0) {
      if (answer !== test.answer) errors.push(i);
      log(chalk.blue("Test input:"));
      log(chalk.yellow(JSON.stringify(test.params)));
      log(chalk.blue("Expected Output:"), test.answer);
      log(
        chalk.blue("Received:"),
        errors.length > 0 ? chalk.red(answer) : chalk.green(answer)
      );
      log("\n");
    }
  }
  const finish = performance.now();
  durations.push(finish - start);
  if (errors.length > 0) {
    break;
  }
}

const totalTime = durations.reduce((curr, prev) => curr + prev, 0);
const prettyTotalTime = Math.round((totalTime + Number.EPSILON) * 100) / 100;

// const averageTime = totalTime / durations.length;
// const prettyAverageTime = Math.round((averageTime + Number.EPSILON) * 10000) / 10000;

errors.length > 0
  ? log(
      chalk.red(
        `Completed ${tests.length} tests and found errors in ${errors.length} tests.`
      )
    )
  : log(
      chalk.green(
        `${tests.length} tests completed ${NUMBER_OF_ITERATIONS} times in ${prettyTotalTime} ms.`
      )
    );
