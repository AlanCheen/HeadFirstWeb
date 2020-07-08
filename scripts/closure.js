// 闭包
// console.log('closure')
// {
//     let message = 'hi';
//     alert(message); //hi
// }
// console.log(message); //ReferenceError: message is not defined

// const name = "程序亦非猿";
// console.log(name);
// {
//     const name = "Fitz";
//     function sayHi() {
//         console.log("Hi," + name);
//     }
//     sayHi();
// }

// {
//     const nickname = "程序亦非猿"
// }
// console.log(nickname);
// console.log('ha');

// console.log(nickname);
// const nickname = "程序亦非猿"

sayHi();
function sayHi(){
    console.log('Hi 程序亦非猿');
}


// let message = 'hi22';
// console.log(message);//SyntaxError: Identifier 'message' has already been declared

// console.log(this)
// const testname = '2';
// console.log(this)

// {
//     const testname = '1';
//     console.log(testname);//1
//     console.log(this)
//     console.log(this.testname);//空
// }


// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2()); // 1