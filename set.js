/**
 * set
 * 可以存储任何类型，不能存入重复的值
 */
console.log("-----Set初始化：set方式-----");
const set1 = new Set();
set1.add(100);
set1.add({name:'majun',code:'1001'});
set1.add(function(){});
console.log(set1);

console.log("-----Set初始化：数组方式-----");
const set2 = new Set([100,'value',function(){}]);
console.log(set2);

console.log("-----for...of遍历set-----");
for(let value of set1){
  console.log(value);
}

console.log("-----forEach遍历set-----");
set1.forEach(value=>console.log(value));

console.log("-----next()遍历set-----");
const entries = set1.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

console.log("-----set长度-----");
console.log(set1.size);

console.log("-----set中是否包含某个值-----");
console.log(set1.has(100));
console.log(set1.has(50*2)); //里面可以包含计算表达式，同样返回true
console.log(set1.has({name:'majun',code:'1001'})); //返回false，存对象的话存储的是地址
const user = {name:'majun2',code:'1002'};
set1.add(user);
console.log(set1);
console.log(set1.has(user)); //这个时候返回的就是true，应为是同一个对象，地址也一样

console.log("-----删除set的值-----");
set1.delete(user);
console.log(set1);

console.log("-----将set转化为数组-----");
const values = Array.from(set1);
console.log(values);
