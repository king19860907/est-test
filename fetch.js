/**
 * fetch.js http方法
 * 返回的是个promise对象
 */
function getDataFromUrl(){
  console.log('-----通过接口获取返回值-----');
  const url = 'http://jsonplaceholder.typicode.com/users';
  return fetch(url)
    .then(response => {
      //fetch第一次返回是返回一个response对象
      console.log(response);
      //然后通过对json的处理再次返回一个promise的对象
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error=>console.log(`error:${error}`));
}

function getDataFromText(){
  console.log('-----通过纯文本获取返回值-----');
  return fetch('mock/test.txt')
    .then(res=>res.text())
    .then(result=>console.log(result));
}

function getDataFromJson(){
  console.log('-----通过纯本地json数据获取返回值-----');
  return fetch('mock/users.json')
    .then(res=>res.json())
    .then(json=>console.log(json));
}

/**
 * 这样三个异步方法就改为同步执行
 */
getDataFromUrl()
  .then(()=>getDataFromText())
  .then(()=>getDataFromJson());
