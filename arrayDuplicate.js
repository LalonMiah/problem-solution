var nam = ['Lalon', 'Nur', 'Milon', 'Lalon', 'Sohag', 'Nur', 'Sabbir'];
var actual = [];

for(var i = 0; i <nam.length; i++){
    var element = nam[i];
    var index = actual.indexOf(element);
    if(index === -1){
        actual.push(element);
    }
}

console.log(actual);