// Find innermost equasion
const findInnerEq = (str) =>
str.substring(str.lastIndexOf("(") + 1, str.indexOf(")"));

// Find Brackets RegEx
const brakets = /(?<=\().*(?=\))/g;

// Changing RegEx function
const changeRE = (str) =>
  str.slice(str.lastIndexOf("(") + 1, str.indexOf(")"));

// Return calculation
const calculate = (str) => {
  let exp = findInnerEq(str).toLowerCase().split(" ").filter(Boolean);
  let calc = exp
    .slice(1)
    .map((element) => parseInt(element))

  switch (exp[0]) {
    case "add":
      return calc.reduce((acc, cur) => acc + cur, 0);
      break;
    case "multiply":
      return calc.reduce((acc, cur) => acc * cur, 1);
      break;
    default:
      console.log("Please enter valid expression");
      process.exit();
  }
};


// Recursive function
const calculator = (str) => {
  let curString;
  if (str.match(brakets)) {
    curString = str;
    let changingReg = `\(${changeRE(curString)}\)`;
    curString = curString.replace(changingReg, calculate(curString));
    return calculator(curString);
  } else {
    return str;
  }
};

console.log(calculator(process.argv[2]));
