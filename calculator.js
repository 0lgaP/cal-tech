const expression = process.argv[2].trim()

// Find innermost equasion
const innerAdd = str => str.substring(str.lastIndexOf("(") + 1, str.indexOf(")"))

// Return the sum or product
const calculate = str => {
  
  let exp = innerAdd(str).split(" ")
  if (exp[0].toLowerCase() === "add"){
    return +exp[1] + +exp[2]
  }
  if (exp[0].toLowerCase() === "multiply"){
    return +exp[1] * +exp[2]
  }
}

// Changing regex
const innerSlice = str => str.slice(str.lastIndexOf("(") + 1, str.indexOf(")"))

let curString = expression

const resolve = str => {
  let changingReg = `\(${innerSlice(str)}\)`
  return curString.replace(changingReg, calculate(curString))
}

// Find All Brackets RegEx
const brakets = /(?<=\().*(?=\))/g

// Recursive function
const calculator = str => {

  if(str.match(brakets)){
    curString = resolve(str)
    return calculator(curString)
  } else {
    return str
  }
  
}

console.log(calculator(curString))