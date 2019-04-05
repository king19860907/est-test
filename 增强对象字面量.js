/**
 * 增强对象字面量
 * 缩减代码
 */
const users = [
  {name:'majun1',code:'1001',salary:1000},
  {name:'majun2',code:'1002',salary:2000},
  {name:'majun2',code:'1002',salary:2000},
];

function createUsers(users){
  return {
    //相当于users:users
    users,
    //相当于totalSalary:function(){}
    totalSalary(){
      return this.users.reduce((total, user) => total+user.salary, 0)
    },
    //相当于getUserByCode:function(code){}
    getUserByCode(code){
      return this.users.find((user) => {return user.code === code});
    },
  };
}

const allUser = createUsers(users);
console.log(allUser.totalSalary());
console.log(allUser.getUserByCode('1002'));
