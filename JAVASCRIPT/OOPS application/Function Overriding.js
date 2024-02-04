function Proto() {
  this.name = 'Proto'
  return this;
}

Proto.prototype.getName = function() {
  return this.name
}

class MyClass extends Proto {
  constructor() {
    super()
    this.name = 'MyClass'
  }
}

const instance = new MyClass()

console.log(instance.getName())

Proto.prototype.getName = function() { return 'Overridden in Proto' }     // function overridden

console.log(instance.getName())

MyClass.prototype.getName = function() { return 'Overridden in MyClass' }

console.log(instance.getName())

instance.getName = function() { return 'Overridden in instance' }


console.log(instance.getName())
