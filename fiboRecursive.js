function fiboRecursive(n){
    if(n === 1){
        return 1;
    }else if(n===0){
        return 0;
    }else{
        return fiboRecursive(n-1) + fiboRecursive(n-2);
    }
}

var result = fiboRecursive(10);
console.log(result);