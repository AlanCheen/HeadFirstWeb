// 第 5 章


document.writeln('</br>');
document.writeln('第五章');
document.writeln('</br>');


//5.1 伪类
// //与其这么写
// var myObject = maker(f,l,m,c,s);

// //不如这么写
// var myObject = maker({
//     first:f,
//     last:l,
//     state:s,
//     city:c
// })

//5.3 原型
var myMammal = {

    name: 'Herb the Mammal',

    get_name: function () {
        return this.name;
    },

    says: function () {
        return this.saying || '';
    }
}

var myCat = Object.create(myMammal);

myCat.mame = 'Henrietta',
    myCat.saying = 'meow',
    myCat.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    }

myCat.get_name = function () {
    return this.says + ' ' + this.name + ' ' + this.says;
}

