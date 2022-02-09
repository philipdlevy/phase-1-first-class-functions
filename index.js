
function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function newFunction() {
    }
};

function returnsAnAnonymousFunction () {
    return function() {
    }
};