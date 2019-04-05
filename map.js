/**
 * 数据结构：map
 * 键值对：key和value可以是任何类型
 */
const map = new Map();
const key1 = 'key1';
const key2 = {};
const key3 = function(){};
map.set(key1,'value1');
map.set(key2,'value2');
map.set(key3,'value3');
console.log(map);

console.log('-----获取value-----');
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

console.log('-----获取map长度-----');
console.log(map.size);

console.log('-----for...of遍历map-----');
for(let [key,value] of map){
  console.log(`${key}=${value}`);
}

console.log('-----forEach遍历map-----');
map.forEach((key,value)=>{
  console.log(`${key}=${value}`);
});

/**
 * map中包含的是个entries,是个生成器方法，value是个[key,value]的数组
 *
 */
console.log('-----next()遍历map-----');
const entries = map.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

/**
 * map.keys()返回的就是一个生成器方法
 * 可以map.keys().next();
 */
console.log('-----获取所有的key-----');
for(let key of map.keys()){
  console.log(key);
}

console.log('-----通过next()获取key-----');
const keys = map.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

/**
 * 同keys()方法一样都是返回一个生成器方法
 */
console.log('-----获取所有的value-----');
for(let value of map.values()){
  console.log(value);
}

/**
 * 相当于一个二维数组
 * [
 *  [key1,value1],[key2,value2],...
 * ]
 */
console.log('-----将map转化为数组-----');
const keyValueArray = Array.from(map);
console.log(keyValueArray);

console.log('-----将转化为数组-----');
const keysArray = Array.from(map.keys());
console.log(keysArray);

console.log('-----将value为数组-----');
const valuesArray = Array.from(map.values());
console.log(valuesArray);
