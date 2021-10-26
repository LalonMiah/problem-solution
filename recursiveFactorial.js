function recursiveFactorial(n){
    if(n === 0 || n === 1){
        return 1;
    }else{
        return recursiveFactorial(n-1)*n;
    }
}


var result = recursiveFactorial(10);
console.log(result);