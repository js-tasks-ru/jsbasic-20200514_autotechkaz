/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let trs = table.querySelectorAll('tr');
  for (let tr of trs){
    let td = tr.lastElementChild;

    if(td.innerHTML=="Status") continue;
    if (td.dataset.available==="true"){
      tr.classList.add("available");
    }
    else {tr.classList.add("unavailable");  }
   tr.setAttribute("hidden","true");
   let gender = td.previousElementSibling;
   if(gender.innerHTML==="m"){
     tr.classList.add("male");
   } else{
     tr.classList.add("female");
   }
   let age = gender.previousElementSibling.innerHTML;
   console.log(+age);
   if(+age<18){
     tr.style.textDecoration = "line-through";
   }

  }
}
