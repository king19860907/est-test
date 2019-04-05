/**
 * generator 生成器
 * 可以返回多次的函数
 * 每次返回一个对象
 * {
 *  value:object 表示返回的值，用field关键字返回
 *  done:boolean 是否执行到最后一步，如果是field返回的，则为false，如果执行到最后，则返回true
 * }
 */
function* numbers(){
  yield;
}
const gen = numbers();
console.log(gen.next());
console.log(gen.next());

/**
 * 斐波那契函数
 */
console.log("-----斐波那契函数-----");
function* fib(max){
  let [a,b,n] = [0,1,0];
  while(n<max){
    yield a; //返回a，并done返回false
    [a,b]=[b,a+b]; //将b赋值给a，将a+b赋值给b
    n++;
  }
  return;
}
const f = fib(5)
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());  //这里调用了最后一次，返回的done 为 true
console.log(f.next());  //这里返回的value为nndifined

console.log("-----for...of 遍历生成器-----");
for(let a of fib(5)){
  console.log(a);
}

console.log("-----将生成器的返回值赋值到数组中-----");
const arrs = Array.from(fib(5));
console.log(arrs);
