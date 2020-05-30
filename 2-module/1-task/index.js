/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
/*jshint esversion: 6 */
function sumSalary(salaries) {
  let key;
  let sum=0;
for (key in salaries){
  if (typeof( salaries[key]) === "number" ) {
    sum += salaries[key];
    }
  }
    return sum;
}
