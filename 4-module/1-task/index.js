/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  let uli = document.createElement("ul");
  for (let friend of friends){
    if(friend){
      let li = document.createElement("li");
      li.innerHTML  = ` ${friend.firstName} ${friend.lastName}`;
      uli.appendChild(li);
    }
  }

return uli;
}
