
document.writeln('</br>');
document.writeln('第四章');
document.writeln('</br>');
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value);//1
myObject.increment(2);
document.writeln(myObject.value);//3

myObject.double = function () {

    var that = this;

    var helper = function () {
        that.value = that.value * 2;
    };
    helper();
}

myObject.double();
document.writeln(myObject.value);//6
document.writeln("</br>");

//this 指向
var value = 3
myObject.triple = function () {
    var helper2 = function () {
        console.log('helper2 this:' + this)//this 指向 object Window
        this.value = this.value * 3;
        console.log('this.value:' + this.value)//9
    }
    console.log('helper3 this:' + this)//this 指向 object Object
    helper2();
}
myObject.triple();
document.writeln('triple:' + myObject.value);//还是 6
document.writeln("</br>");

//构造器
var status = "biubiu"
var Quo = function (string) {
    this.status = string;
}

Quo.prototype.get_status = function () {
    return this.status;
}

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status());//confused
document.writeln("</br>");

//apply
function add(a, b) { return a + b }

var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
    status: "A-OK",
}

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln("status:" + status)//A-OK
document.writeln("</br>");

//arguments
var sum = function () {

    sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum += element;
    }
    return sum;
}

document.writeln("sum" + sum(1, 2, 3, 4, 5));//15
document.writeln("</br>");


var add = function (a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

var try_it = function () {

    try {
        add('seven');
    } catch (e) {
        document.writeln(e.name + ':' + e.message);
    }
}

try_it();//TypeError:add needs numbers
document.writeln("</br>");

//4.7
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

//这里的 this 指向的是具体的数字
Number.method('integer', function () {
    console.log('integer:' + this);
    return Math[this < 0 ? 'ceil' : 'floor'](this);//书里写的 ceiling 方法好像没了？
})
document.writeln((-10 / 3).integer());
document.writeln("</br>");

//在原型链中没有该方法才加，
Function.prototype.foo = function(name,func){
    if(!this.prototype[name]){
        this.prototype[name]=func;
    }
}

// 4.9 作用域
var foo = function (){

    var a=3,b=5;

    var bar = function(){
        var b = 7,c=11;
        //此时 a=3,b=7,c=11
        a+= b+c;
        //此时 a=21,b=7,c=11
    }
    //此时 a=3,b=5,c=undefined
    bar();
    // 此时 a=21 b=5
}
