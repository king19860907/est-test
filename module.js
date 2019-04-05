/**
 * 加载http模块
 * 在html引入js时需要指定type为module
 * <script src="module.js" type="module" charset="utf-8"></script>
 */
import {http} from './httpV3.js'

/**
 * 测试方法
 */
const url = 'http://jsonplaceholder.typicode.com/posts';

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
};

console.log(executeAllFunc().then(res=>console.log(res)));
