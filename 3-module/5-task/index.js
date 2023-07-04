function getMinMax(str) {
  let result = {};
  let splitStr = str.split(' ');
  let onlyNumber = splitStr
    .filter(value => isFinite(value))
    .map(value => +value);

  result.min = Math.min.apply(null, onlyNumber);
  result.max = Math.max.apply(null, onlyNumber);

  return result;
}
