let num = 6;
//(?) Write a conditional --> +  -
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num === 0) {
  console.log(`${num} is zero. neutral`);
} else {
  console.log(`${num} is negative`);
}
// --If Else If Else

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

// demoFunc
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
annesExample("18");
annesExample("15");

// Ternary Operators
// Syntax:  condtion ? trueStatement  : falseStatement
num === 2 ? console.log("Num is 2") : console.log("Num is not 2");
// condition  ? ifTrue                  :  ifFalse

if (num === "3") {
  console.log("TreBall!");
} else {
  throw "Error: If Its not 3, then it cannot Be!";
}
num === 3 ? console.log("TreBall!") : console.log("You Missed");
// condtion

// num > 1 ?  num + 15 : num - 10       [calculated ternary]

try {
    let jordan;
    let chopped = jordan.split('')
    console.log(chopped)
} catch (error) {
  // console.log(error)
  // console.error(error)
  throw "Our Own Error Can Be Declared Here.";
}