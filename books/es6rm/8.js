//函数的扩展



function log(x, y) {
    y = y || 'world';
    console.log(x, y)
}

function log(x, y = 'World') {
    console.log(x, y);
}


function add(...values) {

    let sum = 0;

    for (var val of values) {
        sum += val;
    }
    return sum;
}

add(1, 2, 3, 4, 5);//15


//箭头函数
var f = v => v;
//等同于
var f = function (v) {
    return v;
};

var f = () => 5;
var f = function () {
    return 5;
};

var getObject = id => ({ id: id, name: "temp" });

[1, 2, 3].map(function (x) {
    return x * x;
})

[1, 2, 3].map(x => x * x);

const full = ({ first, last }) => first + ' ' + last;
// 等同于
function full(person) {
    return person.first + ' ' + person.last;
}

function foo() {
    setTimeout(() => {
        console.log(this)//{id:42} 而不是 window
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id: 42 });

function foo2() {
    setTimeout(function() {
        console.log(this)//是 window 而不是{id:42}
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo2.call({ id: 42 });


const cat = {
    lives: 9,
    jumps: () => {
        console.log(this)//window 而不是 cat
        this.lives--;
    }
}

cat.jumps();//undefined


const cat2 = {
    lives: 9,
    jumps: function(){
        console.log(this)//cat2
        this.lives--;
    }
}

cat2.jumps();//{lives:9,jumps:f}


function /* foo comment */ foo() { }
foo.toString()




try {

} catch (err) {

}

try {

} catch{

}


