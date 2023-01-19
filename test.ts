/*
 *   Copyright (c) 2023 Phuong My Chi Entertainment Co.,Ltd
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

// write hello world code

/**
 * It takes an array of numbers as an argument and returns the sum of all the numbers in the array
 * @param arr - [] - this is the array that we're going to be summing up.
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
const sumTotal = (arr: []) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

/**
 * AddSum is a function that takes two numbers as arguments and returns the sum of those numbers.
 * @param {number} a - number - This means that the parameter a is a number.
 * @param {number} b - number - This is the second parameter, and it's a number.
 * @returns the sum of the two numbers.
 */
const addSum = (a: number, b: number) => {
  return a + b;
};

/**
 * SubNum is a function that takes two numbers as arguments and returns the difference of the two
 * numbers
 * @param {number} a - number - This is the first parameter, and it's a number.
 * @param {number} b - number
 * @returns The function is being returned.
 */
const subNum = (a: number, b: number) => {
  return a - b;
};

/**
 * This function takes two numbers as arguments and returns the remainder of the first number divided
 * by the second number.
 * @param {number} a - number
 * @param {number} b - number
 * @returns The remainder of the division of a and b.
 */
const diveNum = (a: number, b: number) => {
  return a % b;
};

/**
 * It takes two numbers as arguments and returns the solution to the equation ax + b = 0
 * @param {number} a - number, b: number
 * @param {number} b - number, a: number
 */
const equaEval1 = (a: number, b: number) => {
  let x = 0;
  try {
    if (a > 0) {
      console.log((x = -b / a));
    }
    if (a === 0 && b > 0) {
      console.log("PT Vo Nghiem");
    }
    if (a === 0 && b === 0) {
      console.log("PT Co Vo Nghiem");
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * It takes three numbers as arguments, and returns the solutions to the equation ax^2 + bx + c = 0
 * @param {number} a - number, b: number, c: number
 * @param {number} b - number, c: number, a: number
 * @param {number} c - number, b: number, a: number
 */
const equaEval2 = (a: number, b: number, c: number) => {
  let detal = Math.pow(b, 2) - 4 * a * c;
  let x1 = 0;
  let x2 = 0;
  let x = 0;
  try {
    if (detal > 0) {
      let detax1 = -b + Math.sqrt(detal);
      let detax2 = -b - Math.sqrt(detal);

      console.log((x1 = detax1 / (2 * a)));
      console.log((x2 = detax2 / (2 * a)));
    }
    if (detal < 0) {
      console.log("PT VN");
    }
    if (detal === 0) {
      console.log((x = -b / (2 * a)));
    }
  } catch (error) {
    console.log(error);
  }
};
