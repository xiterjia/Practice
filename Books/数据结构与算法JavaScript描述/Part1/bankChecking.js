function Checking (amount) {
  this.banance = amount; // 属性
  this.deposit = deposit; // 方法
  this.withdraw = withdraw;
  this.toString = toString;
}

var deposit = function (amount) {
  this.banance += amount
}
var withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    // console.log('')
  }
}