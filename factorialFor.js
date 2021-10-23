function forFact(num){
    var factorial = 1;
    for(var i=1; i<=num; i++) {
        var factorial = factorial*i;
        console.log(i,factorial);
    }
    return factorial;
}

var result = forFact(10);