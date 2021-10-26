function fib(num){
    var a = 0;
    var b = 1;
    var temp;

    while (num > 0){
            temp = b;
            b = b + a;
            a = temp;
            num--;
            console.log(temp);
    }
    return a;
}

fib(0); // 0
fib(1); // 1
fib(2); // 1
fib(3); // 2
var result = fib(10);
console.log(result);