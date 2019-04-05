const user = {
  name:'majun',
  code:1001
}

toUpperCase = (str) =>{
  return str.toUpperCase();
}

/**
 * 由于js是执行语言，一行一行执行
 * 涉及到的方法或变量的定义需要在模板之上
 *
 */
let template =`
  <!-- 调用方法 -->
  <h1>${toUpperCase('Hello World')}</h1>
  <!-- 调用变量 -->
  <div>姓名：${user.name}</div>
  <div>用户代码：${user.code}</div>
`;
document.getElementById('template').innerHTML = template;
