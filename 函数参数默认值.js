/**
 * 函数参数默认值
 * 优化代码
 */
const users = [];

/**
 * 创建用户
 * @param  {[type]} name [description]
 * @param  {[type]} code [description]
 * @param  {[type]} sex  [可为空，如果没有传入sex，则默认为'm']
 * @return {[type]}      [description]
 */
function createUser(name,code,sex='m'){
  return {
    name,
    code,
    sex,
    pushUser(){
      users.push({name,code,sex});
    }
  }
}

createUser('majun1','1001','m').pushUser();
createUser('majun2','1002','f').pushUser();
//传统的方法中如果没有指定sex则依旧可以调用，只不过sex赋值为undefined
createUser('majun2','1002').pushUser();


console.log(users);
