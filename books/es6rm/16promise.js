//promise

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const value = "Hello World!";
        resolve(value);
    }, 300);
});

promise.then(function (value) {
    //success
    console.log(value);
}, function (error) {
    //error
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Hello');
        resolve();
    },300);
}).then(function(){
    console.log('World');
},function(error){
    console.log('error1')
}).then(function(){
    console.log('!!');
}, function (error) {
    console.log('error2')
})



new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('sth went wrong'));
    }, 300);
}).then(function(){
    console.log('resolved');
}).catch(function(error){
    console.log(error.message);
});