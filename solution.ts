/*
Solution should be of the form:

const solution = (params) => {
  return answer
}

*/

type Solution<T, U> = (...args: T[]) => U;

export const solution: Solution<string, number> = (S, C) => {
  const rows = S.split("\n");
  const header = rows[0];
  const data = rows.slice(1);

  const colCIndex = header.split(",").findIndex((el) => el === C);

  const colCValues = data.map((el) => {
    return Number(el.split(",")[colCIndex]);
  });
  return Math.max(...colCValues);
};
