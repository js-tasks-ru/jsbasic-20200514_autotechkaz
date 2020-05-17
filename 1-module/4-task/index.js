/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(text) {
  const regexList = [/1XbeT now/, /free xxxxx/];
  //Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
  //test регулярка ищет паттерн в строке , array.some( function( currentValue, index, arr ), thisValue );
  //function(rx) { return rx.test(text); }); 5.1
  if (/innocent rabbit/.test(text)) return false;
  if (regexList.some(rx => rx.test(text))) return true;
}
