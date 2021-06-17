// https://github.com/nozibuddowla/assignment_3.git

// give a hotelcost
function hotelCost(days){
    if(days <= 0){
        return ("days can not be null");
    }
    if (typeof (days) != 'number'){
        return ("invalid data");
    }

    var rent = 0;
    var normalPayment = 0;
    var mediumPayment = 0;
    var premiumPayment = 0;
    if(days <= 10){
        rent = days * 100;
    }
    else if(days <= 20){
        normalPayment = days * 100;
        remainPayment = days - 10;
        mediumPayment = days * 80;
        rent = normalPayment + mediumPayment;
    }
    else{
        normalPayment = days * 100;
        mediumPayment = days * 80;
        premiumPayment = days * 50;
        remainPayment = days - 20;
        rent = normalPayment + mediumPayment + premiumPayment;
    }
    return rent;
}

var costResult = hotelCost(22);
console.log(costResult);

// recives an max length names from an array
function megaFriend(names){
    if(names.length <= 0){
        return ("length can not be empty");
    }
    else{
        var maxLengthsName = names[0];
        for(var i = 0; i < names.length; i++){
            var element = names[i];
            if(maxLengthsName.length < element.length){
                maxLengthsName = element;
            }
        }
        return maxLengthsName;
    }
}
var megaResult = megaFriend(['glenn', 'maggie', 'tara', 't-dog', 'lori', 'hershel', 'beth', 'bob', 'rick', 'carol', 'carl']);
console.log(megaResult);