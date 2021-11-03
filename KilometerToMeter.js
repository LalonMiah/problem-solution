function kilometerToMeter(num){
    var meter = 1;
    for(var i=1; i<=num; i++){
        var kilo = i;
        meter = 1000*kilo;
    }
    return meter;
}

var result = kilometerToMeter(1);
console.log(result);

//Budget Calculation.

function budgetCalculator(num1, num2, num3){
    var watchPrice = num1*50;
    var phonePrice = num2*100;
    var laptopPrice = num3*500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}

var result = budgetCalculator(10, 5, 2);
console.log(result);


//Hotel Cost calculation

function hotelCostCalculator(day){
    var totalCost = 0;
    if(day <=10){
        var totalCost = day * 100;
    }
    else if(day <= 20){
        var hotelCost1 = 10 * 100;
        var remainingDays = day - 10;
        var hotelCost2 = remainingDays * 80;
        var totalCost = hotelCost1 + hotelCost2;
    }
    else{
        var hotelCost1 = 10 * 100;
        var hotelCost2 = 20 * 80;
        var remainingDays = day - 20;
        var hotelCost3 = remainingDays * 50;
        var totalCost = hotelCost1 + hotelCost2 + hotelCost3;
    }
   return totalCost;
}

var result = hotelCostCalculator(23);
console.log(result);