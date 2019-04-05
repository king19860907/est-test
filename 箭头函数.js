/**
 * 箭头函数
 * 1.缩减代码
 * 2.改变this指向
 */

console.log("-----传统函数写法-----");
const double = function(number){
  return number*2;
}
console.log(double(2));

console.log("-----优化1-----");
const double2 = (number) => {
  return number*2;
}
console.log(double2(2));

console.log("-----优化2-----");
//如果只有一个参数的客户省略中括号
const double3 = number => {
  return number*2;
}
console.log(double3(2));

console.log("-----优化3-----");
//return 只有一行的话可以省略{}及return关键字
const double4 = number => number*2
console.log(double4(2));

/**
 * 改变this指向
 */
const department={
  users:["majun1","majun2"],
  name:"sales",
  showSummary:function(){
    return this.users.map(function(user) {
      //这里的{this.department}拿不到值，因为这里的this指向了map内部的循环
      return `${user}属于${this.name}部门`;
    })
  }
}
console.log(department.showSummary());


const department2={
  users:["majun1","majun2"],
  name:"sales",
  showSummary:function(){
    return this.users.map((user) => {
      return `${user}属于${this.name}部门`
    })
  }
}
console.log(department2.showSummary());
