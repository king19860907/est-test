const colors = ["red","blue","green"];

console.log("------forEach第一种写法-------");
colors.forEach(function(color){
  console.log(color);
});

console.log("------forEach箭头函数-------");
colors.forEach((color) => {
  console.log(color);
})

/**
 * map
 *
 */
console.log("------map-------");
console.log("------将一个数组的中的每个值*2放到一个新的数组中-------");
console.log("------原来的写法-------");
const numbers = [1,2,3];
let newNumbers1 = [];
numbers.forEach((number) => {
  newNumbers1.push(number*2);
})
console.log(newNumbers1);

console.log("------map的写法-------");
let newNumbers2 = numbers.map((number) => {
  return number*2;
})
console.log(newNumbers2);

console.log("------将一个数组中包含对象的中的每个对象提取部分属性放到一个新的数组中-------");
const users = [
  {name:'majun1',code:'1001',sex:'m'},
  {name:'majun2',code:'1002',sex:'m'},
  {name:'majun3',code:'1003',sex:'m'},
  {name:'zhangsan',code:'1004',sex:'m'},
];
let newUsers = users.map((user) => {
  return {
    name:user.name,code:user.code
  }
});
console.log(newUsers);

/**
 * filter
 */
console.log("------filter-------");
console.log("------过滤出满足条件的数据-------");
console.log("------原来的写法-------");
let filterUsers1 = [];
users.forEach((user) => {
  if(user.name.indexOf("majun") >= 0){
    filterUsers1.push(user);
  }
});
console.log(filterUsers1);

console.log("------filter写法-------");
let filterUsers2 = users.filter((user) => {
  return user.name.indexOf('majun')>=0;
});
console.log(filterUsers2);

/**
 * find只会查询出第一条符合条件的数据
 * find
 */
console.log("------find-------");
console.log("------查询出第一条满足条件的数据-------");
let findUser = users.find((user) => {
  return user.code === '1001';
});
console.log(findUser);

/**
* every
* 当数组中所有数据都满足条件是返回true，其他都返回false
*/
console.log("------every-------");
console.log("------当数组中所有数据都满足条件是返回true，其他都返回false-------");
let everyResult = users.every(user => {
  return user.sex === 'm';
})
console.log(everyResult);

/**
 * some
 * 当数组中有一条满足条件则返回true，都不满足则返回false
 */
console.log("------some-------");
console.log("------当数组中有一条满足条件则返回true，都不满足则返回false-------");
let someResult = users.some(user => user.name === 'majun1');
console.log(someResult);

/**
 * every场景2 判断所有的input都输入过内容
 */
console.log("------every场景2 判断所有的input都输入过内容-------");
function Field(value){
  this.value = value;
}
Field.prototype.validate = function () {
  return this.value.length > 0;
}
let username = new Field("majun");
let password = new Field("123456");
let email = new Field("majun@163.com");
console.log(username);
//原来判断所有值是否都输入
console.log(username.validate() && password.validate() && email.validate());
//通过every判断所有输入是否都有值
let fieldResult = [username,password,email].every(field => field.value.length>0);
console.log(fieldResult);

/**
 * reduce
 * reduce((需要计算的内容，迭代的对象) => {},需要计算的内容的初始值)
 */
console.log("------reduce-------");
console.log("------reduce场景1：计算数组之和-------");
let sum = numbers.reduce((sum, number) => sum+number, 0);
console.log(sum);

console.log("------reduce场景1：将一个数组的内容抽取到另外一个数组中，替代map-------");
//正常写法
let reduceUsers1 = users.reduce((tempUsers, user) => {
  tempUsers.push({
     name:user.name,
     code:user.code,
  });
  return tempUsers;
}, []);
console.log(reduceUsers1);
//解构写法
let reduceUsers2 = users.reduce((tempUsers, {code,name}) => {
  //这里不用{code:code,name:name} 是用了 es6的增强对象字面量
  tempUsers.push({code,name});
  return tempUsers;
}, [])
console.log(reduceUsers2);
