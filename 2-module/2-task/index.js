/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    let key;
    let bul=true;
  for (key in obj) {
    bul = false;
    }
    return bul;
}
