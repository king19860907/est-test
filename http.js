class HTTP{
  get(url){
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response=>response.json())
          .then(data=>resolve(data))
          .catch(err => reject(err));
      });
  }
  post(url,data){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'POST',
        headers:{
          'Content-type':'application/json;charset=UTF-8'
        },
        body:JSON.stringify(data),
      }).then(response=>response.json())
        .then(json=>resolve(json))
        .catch(err => reject(err));
    });
  }
  put(url,data){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'PUT',
        headers:{
          'Content-type':'application/json;charset=UTF-8'
        },
        body:JSON.stringify(data),
      }).then(response=>response.json())
        .then(json=>resolve(json))
        .catch(err => reject(err));
    });
  }
  patch(url,data){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'PATCH',
        headers:{
          'Content-type':'application/json;charset=UTF-8'
        },
        body:JSON.stringify(data),
      }).then(response=>response.json())
        .then(json=>resolve(json))
        .catch(err => reject(err));
    });
  }
  delete(url){
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'DELETE'
      }).then(response => {
        console.log(response);
        return response.json();
      })
        .then(json => resolve(json))
        .catch(err => reject(err));
    })
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

query().then(()=>add())
       .then(()=>put())
       .then(()=>patch())
       .then(()=>del());
