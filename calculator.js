// Find innermost equasion
const innerAdd = (str) =>
  str.substring(str.lastIndexOf("(") + 1, str.indexOf(")"));

// Changing regex function
const innerSlice = (str) =>
  str.slice(str.lastIndexOf("(") + 1, str.indexOf(")"));

// Return the sum or product
const calculate = (str) => {
  let exp = innerAdd(str).toLowerCase().split(" ");
  let calc = exp
    .slice(1)
    .map((element) => parseInt(element))
    .filter(Boolean);

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
      break;
  }
};

// Find Brackets RegEx
const brakets = /(?<=\().*(?=\))/g;

// Recursive function
const calculator = (str) => {
  let curString;
  if (str.match(brakets)) {
    curString = str;
    let changingReg = `\(${innerSlice(curString)}\)`;
    curString = curString.replace(changingReg, calculate(curString));
    return calculator(curString);
  } else {
    return str;
  }
};

console.log(calculator(process.argv[2].trim()));
