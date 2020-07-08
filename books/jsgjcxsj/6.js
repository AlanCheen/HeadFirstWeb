//第六章
{
    var person = new Object();
    person.name = "程序亦非猿";
    person.age = 13;
    person.sayHi = function () {
        console.log("Hi");
    }
}

{
    var person = {
        name: "程序亦非猿",
        age: 13,
        sayHi() {
            console.log("Hi");
        }
    }
}

{
    function createPerson(name, age) {
        var o = new Object();
        o.name = name;
        o.age = age;
        return o;
    }
    const p1 = createPerson("程序亦非猿", 13);
    const p2 = createPerson("Jack Ma", 33);
}

{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.sayHi = function () { }
    }

    var p1 = new Person("程序亦非猿", 19);
    var p2 = new Person("Jack Ma", 22);
}

{
    let person = {};
    Object.defineProperty(person, "name", {
        writable: false,
        value: "程序亦非猿",
    })
    person.name; //程序亦非猿
    person.name = "Fitz";
    person.name; //程序亦非猿
}

{
    let person = {
        _age: 18
    };

    Object.defineProperty(person, "age", {
        get: function () {
            console.log('getter called')
            return this._age;
        },
        set: function (newValue) {
            console.log('setter called')
            this._age = newValue;
        }
    })
    person._age = 22;

    const pro = Object.getOwnPropertyDescriptor(person, "age");
    pro.configurable
}

{
    let person = {};

    Object.defineProperties(person, {
        name: {
            writable: false,
            value: "程序亦非猿",
        },
        age: {
            writable: true,
            value: 333,
        }
    });
}

