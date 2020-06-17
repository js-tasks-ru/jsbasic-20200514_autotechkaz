/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class SortableTable {

  constructor(rows){
    this.d = rows;
    this.sorted = [];
    this.el = document.createElement("table");
    this.el.innerHTML=`<thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>
    </thead>`;
    let tbody=document.createElement("tbody");
  for (let row of rows){
    let {name, age, salary, city} = row
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=name;
    let td2=document.createElement("td");
    td2.innerText=age;
    let td3=document.createElement("td");
    td3.innerText=salary;
    let td4=document.createElement("td");
    td4.innerText=city;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
     }
    this.el.appendChild(tbody);

  console.log(this.table);
  }

    sort(column, reverse = false) {
    let col=0;
    switch(column){
      case 0: col="name"; break;
      case 2: col ="salary";
    }
    //debugger;
      if (reverse) {
       this.sorted = this.d.sort( (a, b) => {
          if (a[col] < b[col]) { return 1; }
          else { return -1; }     });
      } else {
        this.sorted = this.d.sort( (a, b) => {
          if (a[col] < b[col]) { return -1; }
          else { return 1; }   });
      }
      console.log(this.sorted);
      this.el.innerHTML="";
      this.el.innerHTML=`<thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>
    </thead>`;

        let tbody=document.createElement("tbody");
  for (let row of this.sorted){
    let {name, age, salary, city} = row
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=name;
    let td2=document.createElement("td");
    td2.innerText=age;
    let td3=document.createElement("td");
    td3.innerText=salary;
    let td4=document.createElement("td");
    td4.innerText=city;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
     }
    this.el.appendChild(tbody);
    }
};
