function fib(n,arr=[]){
    if(n<=1){
       return n;
    }
    if(arr!==undefined){
       return arr[n];
    }
    arr[n]=fib(n-1,arr)+fib(n-2,arr);
    return arr[n];
}
