
Array.prototype.indexof = function (arg) {
  var index = -1
  for (var i = 0; i < this.length; i++) {
    debugger
    console.log('indexof', i)
    if (this[i] == arg) {
      index = i;
      break;
      // return i;
    }
  }
  return index
}

var a = [1,2,3,4,5]
console.log(a.indexof(3))