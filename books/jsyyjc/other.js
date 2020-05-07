//附录

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

function isArray(value) {
    return value && typeof value === 'object'
        && value.constructor === Array;
}

if (my_value && typeof my_value === 'object'
    && typeof my_value.length ==='number' &&
    !(my_value.propertyIsEnumerable('length'))
){
    //my_value 是个数组
}