
console.log("-----解构对象-----");
var user = {
  name:'majun',
  code:'1001',
}

var {name} = user;
console.log(name);

//这里用var是因为 用let的话会报name已经定义过的错误，由于let是强作用域的，不能第二次申明
var {name,code} = user;
console.log(name,code);

printUser = (user) =>{
  console.log(`用户名：${user.name} code：${user.code}`);
}
printUser(user);

//方法参数进行解构
printUser2 = ({name,code}) => {
  console.log(`用户名：${name} code：${code}`);
}
printUser2(user);

console.log("-----解构数组-----");
const numbers = [1,2,3,4,5,6];
console.log("-----获取数组前内容-----");
let [a,b] = numbers;
console.log(a,b);
console.log("-----获取数组长度-----");
let {length} = numbers;
console.log(length);

console.log("-----解构对象数组-----");
const users = [
  {name:'majun1',code:'1001',sex:'m'},
  {name:'majun2',code:'1002',sex:'m'},
  {name:'majun3',code:'1003',sex:'m'},
];
console.log("-----获取前两个User-----");
var [user1,user2] = users;
console.log(user1,user2);

console.log("-----获取第一个User中的code-----");
var [{code}] = users;
console.log(code);

console.log("-----将数组转化为对象-----");
const points = [
  [11,12],
  [21,22],
  [31,32],
]
let newPoints1 = points.map(point => {
  let [x,y] = point;
  return {x:x,y:y};
})
console.log(newPoints1);

let newPoints3 = points.map(([x,y]) => {
  return {x,y};
})
console.log(newPoints3);
