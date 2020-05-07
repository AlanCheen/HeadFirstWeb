//第 8 章
document.writeln('</br>');
document.writeln('第八章');
document.writeln('</br>');

var a =['a','b','c'];
var b = ['x','y','z'];
var c = a.concat(b,true)//[a b c x y z true]
document.writeln(c);
document.writeln('</br>');

var a =['a','b','c'];
a.push('d');
var c = a.join('-');//'a-b-c-d' 字符串

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var d = a.push(b, true) //a=["a", "b", "c", Array(3), true] ; d=5


var digits = '0123456789'
var a = digits.split('',5);

