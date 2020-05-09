//对象的扩展


const foo = 'bar';
const baz = { foo };

console.log(baz);//{ foo: 'bar' }

const obj = {

    method() {
        return '程序亦非猿';
    }
}
// 等同于
const obj = {

    method: function () {
        return '程序亦非猿';
    }
}

const cart2 = {
    _wheels: 4,

    get wheels() {
        console.log('get 被调用')
        return this._wheels;
    },

    set wheels(value) {
        console.log('set 被调用')
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
}


let propKey = 'foo';
let obj2 = {
    [propKey]:true,//foo:true
}

obj2.foo //true


const proto = {
    foo : 'hello',
}

const obj3 = {
    foo : 'world',

    find(){
        return super.foo;//hello
    }
}

Object.setPrototypeOf(obj3,proto);

obj3.find()//hello

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }