let result = {};

function getMinMax(str) {
  let splitStr = str.split(' ');
  let onlyNumber = splitStr.map(item => Number(item)).filter(item => item);

  result.min = Math.min.apply(null, onlyNumber);
  result.max = Math.max.apply(null, onlyNumber);

  return result;
}

let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
