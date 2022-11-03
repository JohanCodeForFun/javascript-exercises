const fibonacci = num => {
  let fiboArr = [];
  let sum = 0;
  fiboArr.push(1, 1);

  if (Math.sign(num) === -1) {
    return "OOPS";
  }
  for (let i = 1; i < num; i++) {
    sum = fiboArr[i - 1] + fiboArr[i];
    fiboArr.push(sum);
  }
  
  return fiboArr[fiboArr.length - 2];
};
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
