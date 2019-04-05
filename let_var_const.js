/**
 * var let const
 * var 没有作用于的概念
 */
console.log("------var作用域-----");
testVar = () => {
  var a = 30;
  if(true){
    a = 50;
    console.log(a);
  }
  console.log(a);
}
testVar();

console.log("------let作用域-----");
testlet = () =>{
  let a = 30;
  if(true){
    let a = 50; //如果这里是a = 50 没有let，最最后打印的还是50，因为就定义个一个a 然后值被改变了
    console.log(a);
  }
  console.log(a);
}
testlet();

/**
 * const 用于定义常量
 * 字符串，数值，能修改
 * 数组可以进行push等操作
 * 对象可以更改对象中的值
 * 但数组和对象都不能指向新的数组和对象
 */
const arrays = [];
try{
  arrays.push(["majun1","majun2"]);
  arrays = [];
}catch(err){
  console.log(err);
}
console.log(arrays);

const str = "aaa";
try{
  str = "bbb";
}catch(err){
  console.log(err);
}

const number = 11;
try{
  number = 12;
}catch(err){
  console.log(err);
}

const user = {
  name:'majun'
}
try{
  user.name = 'majun2';
  user.title = 'title';

  user = {name:'majun3'}; //会报错
}catch(err){
  console.log(err);
}
console.log(user);
