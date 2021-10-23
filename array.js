var arry1 = [['Lalon','Nur', 77], ['Milon','Nur', 78], ['Kamrul','Nur', 79], ['Rony','Nur', 95], ['Sohag','Nur', 68], ['F.Rabby','Nur', 85]];
var arry2 = [80, 84, 86, 88, 87, 80, 82, 83, 89];

var Avgmarks = 0;
var Avgmarks2 = 0;

console.log(arry1.length);

for(var i = 0; i < arry2.length; i++) {
    Avgmarks +=arry2[i];
    avg = (Avgmarks /arry2.length);
}

for (var i = 0; i <arry1.length; i++) {
    Avgmarks2 += arry1[i][2];
    avg2 = (Avgmarks2 /arry1.length);
}

console.log("Average: " + avg2);
console.log("The average marks: " + avg);

