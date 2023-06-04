function sum(m, n) {
  return m + n;
}

console.log(typeof typeof 5);


function factorial(n) {
  let factorial = n;
  if (n === 0) {
    factorial = 1;
  } else {
    for (let i = n; i > 1; i--) {
      n -= 1;
      factorial *= n;
    }
  }
  return factorial;
}
console.log(factorial(3));
