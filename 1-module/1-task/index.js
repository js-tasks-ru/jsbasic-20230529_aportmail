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

