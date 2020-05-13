//class 相关


functin Point(x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.toString = function(){
    return '(' + this.x + ',' + this.y + ')';
}


//ES6
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}