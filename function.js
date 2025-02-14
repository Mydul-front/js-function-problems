// manuser ojon ninnoy kora
// first part
/* function totalHeight(number) {
  const num = number / 12;
  return num;
}
const total = totalHeight(75);
console.log(total); */
// sec. part

/* function totalHeight(numbers) {
  const num = parseInt(numbers / 12);
  const num1 = parseInt(numbers % 12);
  const results = num + " ft " + num1 + " inch ";
  return results;
}
const total = totalHeight(75);
console.log(total);
 */
/* function keloMitar(numbers) {
  const miter = parseInt(numbers * 0.62137119);
  return miter;
}
const results = keloMitar(2);
console.log(results); */

// miliMitter to 1 sentimitter
/* function totalMilimiter(numbers) {
  const sentimitter = numbers * 10;
  return sentimitter;
}
const mili = totalMilimiter(10);
console.log("total miliMitar is:", mili); */

// leap year use to function

/* function leapYears(numbers) {
  if (numbers % 4 == 0) {
    console.log("This is a leap year");
  } else {
    console.log("this is a not leap year");
  }
}
const year = leapYears(2026);
console.log(year); */

// je leap year gula 100 diya vag jay na abong 4 diya vag jay tader ke leap year bole

/* function leapYears(numbers) {
  if (numbers % 100 !== 0 && numbers % 4 === 0) {
    return true;
  } else if (numbers % 100 === 0 && numbers % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
const year = leapYears(2400);
const year1 = leapYears(2000);
const year2 = leapYears(4400);
const year3 = leapYears(1900);
const year4 = leapYears(5000);
console.log(year, year1, year2, year3, year4); */

// bijor songkhar gor nirnnoy

/* function bijorSongkha(numbers) {
  let oddNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i]);
    if (numbers[i] % 2 === 1) {
      //  const sum1 = sum + number[i];
      //  console.log(numbers[i]);
      oddNumber.push(numbers[i]);
    }
  }
  //   return sum1;
  //   console.log(oddNumber);
  let sum = 0;
  for (let i = 0; i < oddNumber.length; i++) {
    sum = sum + oddNumber;
  }
  console.log(sum);
}

const numbers = [13, 15, 16, 68, 45, 56, 44];
const results = bijorSongkha(numbers);
console.log(results); */

// no dublicate array in the array

/* const biriyaniKhor = [
  "abdul",
  "kalam",
  "mydul",
  "miran",
  "abdul",
  "kalam",
  "abdul",
];
const numbers = [1, 56, 5, 7, 56, 56, 1, 7, 2];

function noDublicate(biriyaniKhor) {
  const unique = [];
  for (let i = 0; i < biriyaniKhor.length; i++) {
    if (unique.includes(biriyaniKhor[i]) === false) {
      unique.push(biriyaniKhor[i]);
    }
  }
  return unique;
}
const name = noDublicate(numbers);
console.log(name); */

// mathematical solution

/* const min = Math.min(23, 54, 5, 4, 3, 56, 76, 7);
console.log(min);

const number = Math.max(54, 364, 675, 4547, 675859, 464);
console.log(number);
console.log(Math.PI);
console.log(Math.abs(5 - 10));
console.log(Math.round(4.56));
console.log(Math.floor(2.95));
console.log(Math.ceil(1.1)); */

// date ber korar niyom
/* const today = new Date(26, 04, 2025);
console.log(today("en - GB")); */

// olotpalot korar niyom

/* let a = 7;
let b = 5;
// console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b); */


// 2nd swap to the x and y
/* let x = 5;
let y = 7;
[x, y] = [y, x];
console.log(x, y); */
