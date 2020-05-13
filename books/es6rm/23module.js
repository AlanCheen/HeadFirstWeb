//Module 相关
export var firstName = "程序亦非猿";
export var age = 12;

var lastName = '陈';
var isRich = false;

export { lastName, isRich }

function foo(){
    console.log('hello')
}

export {
    foo as Greeting,
}