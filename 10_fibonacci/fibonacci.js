const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const temp = b; // newest previous total value
    b = a + b;
    a = temp;
  }
  return b;
};
/* Recursion
 let n = 3rd term
   fib(0) +fib(1) + fib(1) + fib(0)
       a, b
    0, 1, 1, 2, 3, 5, 8
    fib(3-1) + fib(3-2)
    fib(3) + fib(1)
    fib(2) + fib(1) + fib(1)
    fib(1) + fib(0) + fib(1)

    let n = 4th term;
    fib(4-1) + fib(4-2)
    fib(3) +                   fib(2)
    fib(2) + fib(1) +          fib(1) + fib(0)
    fib(1) + fib(0) + fib(1) + fib(1) + fib(0)

    c=1 a=1 b(previous total value by 1) = 1
    c=2 a=2 b

      const fib = new Array(n);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    //store value take previous two values f[n-1] + f[n-2] = 1 + 0
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
*/
// Do not edit below this line
module.exports = fibonacci;
