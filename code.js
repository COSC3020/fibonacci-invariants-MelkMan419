function fib(n) {
    const arr = [0, 1];
    if (n <= 1) {
        return arr.slice(0, n + 1);
    }
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

module.exports = { fib };
