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

const averageTime =
  durations.reduce((curr, prev) => curr + prev, 0) / durations.length;

errors.length > 0
  ? log(
      chalk.red(
        `Completed ${tests.length} tests and found errors in ${errors.length} tests.`
      )
    )
  : log(
      chalk.green(
        `${tests.length} tests completed ${NUMBER_OF_ITERATIONS} times in average time of ${averageTime} ms to complete the ${tests.length} tests.`
      )
    );
