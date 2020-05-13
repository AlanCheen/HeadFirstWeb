//async 函数

async function testAsync(){
    const result1 = await stepOne();
    const result = await stepTwo(result1);
    return result;
}

function stepOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log('stepOne')
            resolve();
        }, 300)
    })
};

function stepTwo(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('stepTwo')
            resolve('hello async');
        }, 700)
    })
}

testAsync().then(function(result){
    console.log('then');
    console.log(result);
});