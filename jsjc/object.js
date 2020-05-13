//Object 相关

var obj = {
    'p': 'a',
}
Object.getOwnPropertyDescriptor(obj, 'p');


var obj = Object.defineProperties({}, {
    p1: {
        value: 1,
        writable: true,
        enumerable: false
    },
    p2: {
        value: 'hello world',
        writable: true,
        enumerable: true
    },

    p3: {
        enumerable: true,
        configurable: true,
        get: function () { return this.p1 + this.p2; }
    }
})

Object.getOwnPropertyNames(obj)// ["p1", "p2"]

