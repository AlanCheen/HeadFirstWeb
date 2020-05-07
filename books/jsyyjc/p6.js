// 第六章

document.writeln('</br>');
document.writeln('第六章');
document.writeln('</br>');

var empty = [];

var numbers = [

    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
]

empty[1]; //undefined
numbers[1];//one

empty.length;//0
numbers.length;//10

//混合
var misc = [
    'string', 98.6,
    true, null,
    undefined,
    ['nested', 'array'], { object: true },
    NaN,
    Infinity
]

//6.2

var myArray = []

myArray.length;//0

myArray[1000000] = true;
myArray.length;//1000001

numbers.length = 3; //numbers 将会变成 [zero one two ]
numbers[numbers.length] = 'shi';//放到尾部
numbers.push('go');//push 也可以放到尾部

delete numbers[2] //['zero','one',undefined,'shi','go']

//从 index 2开始删除 1 个元素
numbers.splice(2, 1)//['zero','one','shi','go']

for (let i = 0; i < numbers.length; i++) {
    document.writeln(numbers[i]);//zero one shi go 
}
document.writeln('</br>');

//判断是否是数组
var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'))
}

//
Array.prototype.reduce = function (f, value) {
    for (let i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
    return value;
}

var data = [4, 8, 15, 16, 23, 42];

var add = function (a, b) {
    return a + b;
}

// var mult = function (a, b) { return a * b }
var mult = (a, b) => a * b

var sum = data.reduce(add, 0);

document.writeln('sum:' + sum);//sum: 108 
var product = data.reduce(mult, 1)
document.writeln('mult:' + product);//mult: 7418880

data.total = function(){    
    return this.reduce(add, 0)
}
document.writeln('total:' + data.total());//total: 108 
