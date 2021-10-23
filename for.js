for(i = 20; i>0; i--) {
    console.log(i);
}


var monthEarn = [['jan', 500], ['feb', 600], ['mar', 700], ['apr', 300], ['may', 900]];
var average = 0;
for(i=0; i < monthEarn.length; i++) {
     average += monthEarn[i][1]; 
     var total =(average /monthEarn.length);
}

console.log(total);