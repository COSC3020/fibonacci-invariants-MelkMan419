function fib(n,arr=[]){
    if(n===0){
        return arr[0];
    }
    if(n===1){
        return arr[1];
    }
    if(arr!==undefined){
       return arr[n];
    }
    arr[n]=fib(n-1,arr)+fib(n-2,arr);
    return arr[n];
}
