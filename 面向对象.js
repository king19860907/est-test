
/**
 * es5 写法
function Car(options){
  this.title = options.title;
}
//设置方法
Car.prototype.drive = function () {
  return `${this.title} drive`;
}

let car = new Car({title:'BMW'})
console.log(car);
console.log(car.drive());

//继承
function Toyota(options){
  Car.call(this,options);
  this.color = options.color;
}
//复制方法
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
let toyota = new Toyota({title:'Toyota',color:'red'});
console.log(toyota);
console.log(toyota.drive());
*/

/**
 * es6 写法
 */
class Car{
  constructor(options){
    this.title = options.title;
  };
  drive(){
    return `${this.title} drive`;
  }
}
let car = new Car({title:'BMW'});
console.log(car);
console.log(car.drive());

//继承
class Toyota extends Car{
  constructor(options){
    super(options);
    this.color = options.color;
  };
}
let toyota = new Toyota({title:'Toyota',color:'red'});
console.log(toyota);
console.log(toyota.drive());
