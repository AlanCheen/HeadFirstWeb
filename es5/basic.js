//ES5 以及以前

typeof undefined //"undefined"
typeof 1 //"number"
typeof 'str' //"string"
typeof {} //"object"
typeof [] //"object"
typeof false //"boolean"
typeof null //"object"


Object.constructor

Object.prototype

var obj = {

    name:'程序亦非猿',
    age: 18,
}

obj.hasOwnProperty('name')


var numObj = new Number(33.123456);
var numValue = numObj.valueOf();//33.123456

numObj.toFixed(2)//33.12 保留两位小数
numObj.toExponential(1)//"3.3e+1" 科学计数法
numObj.toPrecision(2)//33

var str = "hello"
var nstr = str.concat('world')

console.log(str) //hello
console.log(nstr) //helloworld

str.indexOf('world')//-1
nstr.indexOf('hello')//0
nstr.lastIndexOf('l')//8


var age = 18
var isAdult = age >= 18 ? true : false;
console.log(isAdult)



//函数

function sayHi(){
    console.log(arguments[0]);
    console.log(arguments.length);
}

var sum = new Function('a','b','return a+b;');
sum(1,2);


