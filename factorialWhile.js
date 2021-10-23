function factorial(num){
    var result = num;

    if(num === 0 || num === 1){
        return 1;
    }
  
    while(num > 1){
        num--;
        result = result*num; 
    }
    return result;
}

var output = factorial(10);
console.log(output);

//Another way....

var i = 1;
var fact = 1;

while(i < 10){
    fact = fact*i;
    i++;
    console.log(i,fact);
}