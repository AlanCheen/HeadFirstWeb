//Array 相关



var arr = [1, 2, 3];

arr.map(function (n) {
    return n + 1;
})//[2,3,4]

arr//[1,2,3]


var arr2 = [1, 2, 3]

arr2.forEach(function (n) {
    n = n * 2;
})
arr2//[1,2,3]


var out = [];

[1, 2, 3].forEach(function (n) {
    this.push(n * 2);
}, out);
out//[2,4,6]

var arr3 = [1,2,3]

arr3.filter(function(n){
    return n>1;
})[2,3]


[1,2,3,4,5].reduce(function(a,b){
    return a+b;
})//15
