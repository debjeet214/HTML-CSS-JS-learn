var Circle = function () {};
var shape = {};
var circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === circle); // true

var shape = function () {};
var p = {
    a: function () {
        console.log('aawe are inside var p');
    }
};
shape.prototype.__proto__ = p;  

var circle = new shape();
circle.a(); // aaa
console.log(shape.prototype === circle.__proto__); // true

// or
var shape = function () {};
var p = {
    a: function () {
        console.log('a');
    }
};

var circle = new shape();
circle.__proto__ = p;
circle.a(); // a
console.log(shape.prototype === circle.__proto__); // false

// or
function test() {};
test.prototype.myname = function () {
    console.log('myname');
};

var a = new test();
console.log(a.__proto__ === test.prototype); // true
a.myname(); // myname


// or
var fn = function () {};
fn.prototype.myname = function () {
    console.log('myname');
};

var obj = {
    __proto__: fn.prototype
};

obj.myname(); // myname
