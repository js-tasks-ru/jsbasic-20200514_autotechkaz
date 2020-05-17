/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
"use strict";
function truncate(str, maxlength) {
if ( str.length > maxlength ){
  return str.slice(0,maxlength-1) + "…";
}
else return str;
}
