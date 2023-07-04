function showSalary(users, age) {
  let result;
  let arr = [];
  for (let user of users) {
    if (user.age <= age) {
      str = user.name + ', ' + user.balance;
      arr.push(str);
    }
  }
  result = arr.join('\n')
  return result;
}
