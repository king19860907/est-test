/**
 * 通过async和 await 方式调用
 */
class HTTP{
  async get(url){
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }
  async post(url,data){
    const response = await fetch(url,{
      method:'POST',
      headers:{
        'Content-type':'application/json;charset=UTF-8'
      },
      body:JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
  async put(url,data){
    const response = await fetch(url,{
      method:'PUT',
      headers:{
        'Content-type':'application/json;charset=UTF-8'
      },
      body:JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
  async patch(url,data){
    const response = await fetch(url,{
      method:'PATCH',
      headers:{
        'Content-type':'application/json;charset=UTF-8'
      },
      body:JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
  async delete(url){
    const response = await fetch(url,{
      method:'DELETE'
    });
    console.log(response);
    const result = response.json();
    return result;
  }
}

/**
 * 测试方法
 */
const url = 'http://jsonplaceholder.typicode.com/posts';
const http = new HTTP();

function query(){
  console.log('-----查询数据-----');
  return http.get(url)
          .then(data=>{
            console.log(data);
          })
          .catch(err => console.log(`error:${err}`));
}

function add(){
  console.log('-----新增数据-----');
  const post = {
    userId:1,
    title:'test title',
    body:'test body',
  };
  return http.post(url,post)
          .then(data=>console.log(data))
          .catch(err => console.log(`error:${err}`));
}

function put(){
  console.log('-----更新数据put,对象中为空的值会更新到数据库中-----');
  const post = {
    userId:1,
    body:'test body',
  };
  return http.put(url+'/1',post)
          .then(data=>console.log(data))
          .catch(err => console.log(`error:${err}`));
}

function patch(){
  console.log('-----更新数据patch,对象中为空的值不会更新到数据库中-----');
  const post = {
    userId:1,
    body:'test body',
  };
  return http.patch(url+'/1',post)
          .then(data=>console.log(data))
          .catch(err => console.log(`error:${err}`));
}

function del(){
  console.log('-----删除数据-----');
  return http.delete(url+'/1')
          .then(data => console.log(data))
          .catch(err => console.log(`error:${err}`));
}

async function executeAllFunc(){
  await query;
  await add();
  await put();
  await patch();
  await del();
  return "全部方法同步执行完毕";
}
executeAllFunc().then(res=>console.log(res));
