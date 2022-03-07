const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  const maxNum = Math.max(a, b);
  const minNum = Math.min(a, b);

  //initializer is sum
  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
  //Better Algo
  /*  return ((maxNum - minNum + 1) * (minNum + maxNum)) / 2; */
};

// Do not edit below this line
module.exports = sumAll;
