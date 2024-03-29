const jsc = require('jsverify');
const { fib } = require('./code.js');

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

const fibTest = (n) => {
    const fib_solns = [0];
    if (n === 0) return fib_solns;
    fib_solns[1] = 1;
    if (n === 1) return fib_solns;
    for (let i = 2; i <= n; i++) {
        fib_solns[i] = fib_solns[i - 1] + fib_solns[i - 2];
    }
    return fib_solns;
};

const test = jsc.forall("nat", function (n) {
    return arraysEqual(fib(n), fibTest(n));
});

jsc.assert(test);
