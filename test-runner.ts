/*
Test Runner, do not need to change anything other than the
NUMBER_OF_ITERATIONS if you would like to change how many times it runs
*/

// const { tests } = require("./test-input");
import { tests } from "./test-input.js";
// const { solution } = require("./solution");
import { solution } from "./solution.js";
// const chalk = require("chalk");
import chalk from "chalk";
// const log = console.console.log;

const NUMBER_OF_ITERATIONS = 1000;
const durations: number[] = [];

const errors: number[] = [];

for (let i = 0; i < NUMBER_OF_ITERATIONS; i++) {
  const start = performance.now();
  for (const test of tests) {
    const answer = solution(...test.params);
    if (i === 0) {
      if (answer !== test.answer) errors.push(i);
      console.log(chalk.blue("Test input:"));
      console.log(chalk.yellow(JSON.stringify(test.params)));
      console.log(chalk.blue("Expected Output:"), test.answer);
      console.log(
        chalk.blue("Received:"),
        errors.length > 0 ? chalk.red(answer) : chalk.green(answer)
      );
      console.log("\n");
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
  ? console.log(
      chalk.red(
        `Completed ${tests.length} tests and found errors in ${errors.length} tests.`
      )
    )
  : console.log(
      chalk.green(
        `${tests.length} tests completed ${NUMBER_OF_ITERATIONS} times in ${prettyTotalTime} ms.`
      )
    );
