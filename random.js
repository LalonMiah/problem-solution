function randomNumber(num){
    for(i = 0; i < num; i++){
        var v = Math.random()*6;
        var result = Math.round(v);
        console.log(result);
    }
    return result;
}

var output = randomNumber(10);
