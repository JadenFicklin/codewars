// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(param) {
  let toLower = param.toLowerCase();
  const seperate = toLower.split("");
  const xArr = [];
  const yArr = [];

  for (let i = 0; i < seperate.length; i++) {
    if (seperate[i] === "x") {
      xArr.push(seperate[i]);
    } else if (seperate[i] === "o") {
      yArr.push(seperate[i]);
    }
  }

  if (xArr.length === yArr.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xoOx0oxb"));
