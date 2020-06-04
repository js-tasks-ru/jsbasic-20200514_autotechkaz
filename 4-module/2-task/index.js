/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(tab) {

   let table = tab.firstElementChild;
    for (let tr=0; tr<table.rows.length; tr++){
      for (let td=0; td<table.rows[tr].cells.length; td=td+1){
        if(tr==td){
          table.rows[tr].cells[td].style.backgroundColor = 'red';
        }
      }
    }
}
