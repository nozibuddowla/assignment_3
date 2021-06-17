// https://github.com/nozibuddowla/assignment_3.git

// recives an max length names from an array
function megaFriend(names){
    if(names.length <= 0){
        console.log("length can not be empty");
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
var result = megaFriend(['glenn', 'maggie', 'tara', 't-dog', 'lori', 'hershel', 'beth', 'bob', 'rick', 'carol', 'carl']);
console.log(result);