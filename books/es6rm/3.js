
document.writeln('3.变量的解构赋值')
document.writeln('</br>')
let [a, b, c] = [1, 2, 3]

document.writeln(a + ' ' + b + ' ' + c);

let [, , third] = [1, 2, 3];
third //3

let [x, , y] = [1, 2, 3]
x//1
y//3

let [head, ...tail] = [1, 2, 3, 4];
head//1
tail//[2,3,4]

let [x, y, ...z] = [1];
x//1
y//undefined
z//[]

//也可以对 Set 解构
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"

//默认值
let [foo = true] = [];
foo//true

function f() {
    console.log('aaa'); //不会被执行
}

let [x = f()] = [1];

let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo//'aaa'
bar//'bbb'

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined


const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
foo // "bar"


let { x = 3 } = {}
x//3

let { x, y = 5 } = { x: 1 }
x//1
y//5
var { x = 3 } = { x: undefined };
x // 3

var { x = 3 } = { x: null };
x // null

let arr = [1, 2, 3]
let { 0: first, [arr.length - 1]: last } = arr
first//1
last//3

const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let { toString: s } = 123;
s === Number.prototype.toString // true

let { toString: s } = true;
s === Boolean.prototype.toString // true

