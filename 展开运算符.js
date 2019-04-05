/**
 * 展开开运算符
 * 跟快，更便捷操作数组
 * 有点像java中的不定参
 */
console.log("----不定参用法-----");
let users=[];

addUser = (...user) =>{
  users = users.concat(user);
}

//添加一个user
addUser({name:'majun1',code:'1001',sex:'m'});
//同时添加两个user
addUser({name:'majun3',code:'1003',sex:'m'},{name:'majun2',code:'1002',sex:'f'});
//同时添加数组及单个user
const tempUsers = [
  {name:'majun6',code:'1006',sex:'m'},
  {name:'majun7',code:'1007',sex:'m'}
];
const user = {name:'majun8',code:'1008',sex:'m'};
addUser(user,...tempUsers);
console.log(users);

console.log("----拼接两个数组-----");
addUser2 = (...user) => {
  users = [...user,...users];
}
addUser2({name:'majun4',code:'1004',sex:'m'},{name:'majun5',code:'1005',sex:'m'});
console.log(users);
