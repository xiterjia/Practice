var log = console.log.bind(console)
// 类式继承
// 声明父类
function SuperClass() {
  this.superValue = true
}
// 为父类添加共有方法
SuperClass.prototype.getSuperValue = function() {
  return this.superValue
}
// 声明子类
function SubClass() {
  this.subValue = false
}
// 继承父类
SubClass.prototype = new SuperClass()
SubClass.prototype.getSubValue = function() {
  return this.subValue
}
var instance = new SubClass()

// log(instance.getSubValue());
// log(instance.getSuperValue());

var instance2 = new SubClass()

// SuperClass.prototype.getParent = function () {
//     // return this.__proto__;
//     return this.constructor;
// }

function getPrototype(obj) {
  for (p in obj) {
    console.log('prototype：“' + p + '” --- in obj')
  }
}
