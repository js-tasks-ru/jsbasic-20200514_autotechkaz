/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result="";
  for (const person of data){
    if( person.age<=age) {
      result +=`${person.name}, ${person.balance}\n`
  }

}
return result.slice(0,result.length-1);
}
