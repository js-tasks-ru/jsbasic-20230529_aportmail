function makeFriendsList(friends) {
  let ulList = document.createElement('ul');
  console.log(friends[0].firstName);
  for (let i = 0; i < friends.length; i++) {
    ulList.insertAdjacentHTML("beforeend", `<li>${friends[i].firstName} ${friends[i].lastName}</li>` )
    console.log(ulList);
  }
    return ulList;
}
