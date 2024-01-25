function fib(n,arr=[]){
    if(n===0){
        arr[n]=0;
    }
    else if(n===1){
        arr[n]=1;
    }
    else if(arr!==undefined){
       return arr[n];
    }
    else{
        arr[n]=fib(n-1,arr)+fib(n-2,arr);
    }
    return arr[n];
}
