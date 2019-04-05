/**
 * async和await
 * es7语法
 */

/**
 * async相当于把一个方法申明为promise返回
 */
/**
async function func(){
  return 'hello world';
}
func().then(res=>console.log(res));
**/

/**
 * await相当于等待promise方法执行完毕
 */
function get(url){
  return new Promise((resolve,result)=>{
    fetch(url)
      .then(response=>response.json())
      .then(json=>resolve(json))
  })
}

/**
 * 同步执行promise 方式1
 */
function sync1(){
  console.log('-----同步执行Promise方法 then方式-----');
  return get('http://jsonplaceholder.typicode.com/posts')
    .then(data=>{
      console.log("-----第一次执行-----");
      console.log(data);
      return get('http://jsonplaceholder.typicode.com/users');
    })
    .then(data=>{
      console.log("-----第二次执行-----");
      console.log(data);
    })
}

/**
 * 同步执行promise 方式2
 */
async function sync2(){
  console.log('-----同步执行Promise方法 await-----');
  console.log('-----posts-----');
  const posts = await get('http://jsonplaceholder.typicode.com/posts');
  console.log(posts);

  console.log('-----users-----');
  const users = await get('http://jsonplaceholder.typicode.com/users');
  console.log(users);
}

//这样四次调用全部是同步调用
sync1().then(()=>sync2());
