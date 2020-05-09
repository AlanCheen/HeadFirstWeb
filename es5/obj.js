//对象

//原始的方式
var person = new Object();

person.name = "程序亦非猿";
person.age = 333;

person.hi = function () {
    console.log("hi");
}

//工厂方式
function createPerson() {

    var person = new Object();

    person.name = "程序亦非猿";
    person.age = 333;

    person.hi = function () {
        console.log("hi");
    }
    return person;
}

//工厂方式 传递参数
function createPerson(name, age) {

    var person = new Object();

    person.name = name;
    person.age = age;

    person.hi = function () {
        console.log("hi");
    }
    return person;
}

//在外部定义方法
function hi() {
    console.log("hi" + this.name);
}

function createPerson(name, age) {

    var person = new Object();

    person.name = name;
    person.age = age;

    person.hi = hi;

    return person;
}

//构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hi = function () {
        console.log("hi" + this.name);
    }
}

var cxyfy = new Person('程序亦非猿', 28);
cxyfy.hi();

function Person() { }

Person.prototype.name = '程序亦非猿';
Person.prototype.age = 12;
Person.prototype.hi = function () { }

//混合
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hi = function () {
    console.log("hi" + this.name);
}

//动态原型
function Person(name, age) {
    this.name = name;
    this.age = age;

    if (Person._initialized == 'undefined') {
        Person.prototype.hi = function () {
            console.log("hi" + this.name);
        };
    };
    Person._initialized = true;
}


//继承

function Person(name) {
    this.name = name;
    this.greeting = function () {
        console.log('hi im ' + this.name)
    }
}

function Man(name, age) {

    this.newMethod = Person;
    this.newMethod(name);

    delete this.newMethod;

    this.age = age;

    this.sayAge = function () {
        console.log(this.age);
    };
}

var person1 = new Person('Fitz');
var person2 = new Man('程序亦非猿', 12);
person1.greeting();//hi im Fitz
person2.greeting();// hi im 程序亦非猿
person2.sayAge();//12

person2 instanceof Person//false
person2 instanceof Man//true


function greeting(name) {
    console.log('hi ' + name, ',im ' + this.myname)
}

var me = new Object();
me.myname = "程序亦非猿";

greeting.call(me, 'Fitz');
//apply 第二个参数是数组
greeting.apply(me, new Array('Fitz'));


// function Person(){}

// function Man(){}

// Person.prototype = new Man()














