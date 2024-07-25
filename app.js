let num = 6;
//(?) Write a conditional --> +  -
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num === 0) {
  console.log(`${num} is zero. neutral`);
} else {
  console.log(`${num} is negative`);
}
// --If Else

//(?) Nested If Else
if (num % 2 === 0) {
  console.log(`${num} is even.`);
  if (num === 6) {
    console.log("its 6! pick up sticks!");
  } else {
    console.log("and its def not 6");
  }
} else {
  console.log(`${num} is odd.`);
}

// Switch Statements
let age = "20";

switch (age) {
  case 10:
    console.log("I Love Spiderman");
    break;
  case 15:
    console.log("I Love Fortnite");
    break;
  case 18:
    console.log("I have my license");
    break;
  default:
    console.log("Hmmm, i dont have any instructions for your age");
    break;
}

// demoFunc w prpmopt
const doTheThing = () => {
  let input = prompt("Enter Your Age");
  switch (input) {
    case "16":
      console.log("I Love Spiderman");
      break;
    case "15":
      console.log("I Love Fortnite");
      break;
    case "18":
      console.log("I have my license");
      break;
    default:
      console.log("Hmmm, i dont have any instructions for your age");
      break;
  }
};

const annesExample = (someNumber) => {
  switch (someNumber) {
    case "16":
      console.log("I Love Spiderman");
      break;
    case "15":
      console.log("I Love Fortnite");
      break;
    case "18":
      console.log("I have my license");
      break;
    default:
      console.log("Hmmm, i dont have any instructions for your age");
      break;
  }
};
annesExample("12");

// Ternary Operators
// Syntax:  condtion ? trueStatement  : falseStatement
num === 2 ? console.log("Num is 2") : console.log("Num is not 2");
//------------------------- Ex2:
num === 3 ? console.log("TreBall!") : console.log("You Missed");

// num > 1 ?  num + 15 : num - 10       [calculated ternary]

try {
  let jordan;
  let chopped = jordan.split("");
  console.log(chopped);
} catch (error) {
  // console.log(error)
  console.error(error);
  //   throw "Our Own Error Can Be Declared Here.";
}
// -------TryCatch

// Loops
// "?" allow us to iterate through a group of data/ terms

// -------for ----- while -----  do while ----
for (let i = 0; i < 10; i += 3) {
  console.log(`The value of i is now: ${i}`);
}
// 1. Count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//     console.log(`The value of i is now: ${i}`);
//   }

//2.  Output odd numbers from 1 to 10.
for(i=1;i<=10;i+=2){
console.log(i,"is odd" )
}

//3. Output even number from 1 to 10.
for(let i = 2 ; i <= 10; i+=2){
    console.log(i)
}

// Output multiples of 3, starting at 6 and ending at 60.
for(let i = 6 ; i<=60; i+=3 ){
console.log(i, "*")
}

// *BOnus*
// Output an increasing number of # symbols, from 1 to 7, as shown below.
