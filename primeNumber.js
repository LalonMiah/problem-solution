function primeNumber(num){
    var isPrime = true;
    if(num === 1){
        console.log("The number is prime number");
    }
    
    else if(num > 1){
        for(var i = 2; i < num; i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            console.log(num +" is a Prime Number");
        }else{
            console.log(num +" is not a prime number");
        }
    }

    else{
        console.log("The number is not prime number");
    }
}

var result = primeNumber(10);
var result2 = primeNumber(23);