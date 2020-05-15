/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
if (n<=2) return 1;
let result=n;
for(let i=1;i<n;i++)
  {
    result *=n-i;
  }
  return result;
}
