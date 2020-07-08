//第七章


var factorial = function f(num) {
    if (num < 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
}
const result = factorial(4);
console.log(result);//24

sayHi();
var sayHi = function () {
    console.log('Hi');
}

//不要这样做! 
if (condition) {
    function sayHi() {
        alert("Hi!");
    }
} else {
    function sayHi() {
        alert("Yo!");
    }
}

var sayHi;

if (condition) {
    sayHi = function () { }
} else {
    sayHi = function () { }
}