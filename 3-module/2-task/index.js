/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
let arr = str.split(' ');
let stringData = arr.join();
let array = stringData.split(',');
let array2 = array.filter(item=>{
    if(isNaN(parseInt(item))!==true) return true;}).sort((a,b) => a-b);

return {min:Math.min.apply(null, array2), max: Math.max.apply(null, array2)};
}
