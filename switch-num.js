var a = 5;
var b = 7;

console.log("Before switch the value of a is: " + a + " and b is: " + b);

var temp = 0;

temp = a;
a = b;
b = temp;

console.log("The updated value of a is: " + a + " and b is: " + b);

// another way to switch countNumbers

var x = 5;
var y = 7;
console.log("Before switch the value of x is: " + x + " and y is: " + y);
x = x+y;
y = x - y;
x = x- y;

console.log("The updated value of x is: " + x + " and y is: " + y);

// Another way 

var p = 5;
var q = 7;
console.log("Before switch the value of p is: " + p + " and q is: " + q);
[p, q] = [q, p];

console.log("The updated value of p is: " + p + " and q is: " + q);