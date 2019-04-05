/**
 * 通过模块的方式调用HTTP
 * 将HTTP导出为一个module
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
let http = new HTTP();
export {http};
