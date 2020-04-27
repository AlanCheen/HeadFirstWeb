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

//6
var value = 3
myObject.triple = function () {
    var helper2 = function(){
        console.log('helper2:'+this)//this 指向 object Window
        this.value = this.value * 3;
    }
    console.log('helper3:' + this)//this 指向 object Object
    helper2();
}
myObject.triple();
document.writeln('triple:'+myObject.value);//还是 6
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
var sum = function(){

    sum = 0;
    for(let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum += element;
    }
    return sum;
}

document.writeln("sum"+sum(1,2,3,4,5));//15
document.writeln("</br>");


var add = function(a,b){

    if(typeof a !=='number' || typeof b!=='number'){
        throw{
            name : 'TypeError',
            message : 'add needs numbers'
        };
    }
    return a + b;
}

var try_it = function(){

    try{
        add('seven');
    }catch(e){
        document.writeln(e.name+':'+e.message);
    }
}

try_it();//TypeError:add needs numbers
document.writeln("</br>");


//4.7
Function.prototype.method = function (name,func){
    this.prototype[name] = func;
    return this;
}