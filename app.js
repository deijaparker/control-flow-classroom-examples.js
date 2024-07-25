let anExample = "this"
let calculatedExample = 723 + 44 
let templateLit = `Both ${anExample} but also ${calculatedExample} as a String`
// ---------------------------variableDeclarations



const demo = () => {
  let userInput = prompt(" Give me a number to add");
  //   Get Users Input
  if (userInput === "10") {
    alert("Perfect 10 BRO");
  } else {
    alert("Thats Just the way it goes.");
  }
  console.log(userInput);
};
// Demo 1 _ IF Statement

const legalAgeFunc = () => {
  let usersAge = prompt(" Enter Age");
  let ageToDrive = 18;
  let ageToDrink = 21;
  let ageToRentCar = 25;

  if (usersAge >= ageToDrive && usersAge >= ageToDrink) {
    console.log("Congrats! Come get your permit! and have a drink");
  } else {
    console.log("You are not of age.");
  }
};
// Demo 2 _ IF Statement MULTI Conditional


// Conditional Breakdown: 
    // if(userInput === '10'){
    //     alert("Perfect 10 BRO")
    // }
    // else{
    //     alert("Thats Just the way it goes.")
    // }

// =================if Statement: uses () to evaluate a stmnt to see if result = true.
    // --> true : {}first code block executes
    // --> false: {}else code block executes