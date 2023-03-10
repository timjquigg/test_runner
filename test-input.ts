/*
Tests to be run through your solution. Should be in the format:
const tests = [
  {
    params: [],
    answer
  }
]
*/

interface Test<T, U> {
  params: Array<T>;
  answer: U;
}

export const tests: Test<string, number>[] = [
  {
    params: [
      "id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7",
      "age",
    ],
    answer: 68,
  },
  {
    params: ["area,land\n3722,CN\n6612,RU\n3855,CA\n3797,USA", "area"],
    answer: 6612,
  },
  {
    params: ["city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2", "temp"],
    answer: -2,
  },
];
