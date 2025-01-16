// check the list is sort
//the function recognize type of sort e.g. increase or decrease 

function checkSort(lists){
    myList = lists;
    var increaseCount = 0;
    var decreaseCount = 0;
    var result = ""

    for(i=0;i<myList.length;i++) {
        if(myList[i] < myList[i+1]) {
            increaseCount = increaseCount + 1;
        }
        if(myList[i] > myList[i+1]) {
            decreaseCount = decreaseCount + 1;
        }
    }

    if(increaseCount == myList.length - 1) {
        result = "it's increase sorted!";
        
    }
    else if (decreaseCount == myList.length - 1) {
        result = "it's decrease sorted";
        
    }
    else {
        result = "it's not sorted!";
        
    }

    return result;

}

var list1 = [3,5,8,9];

console.log(checkSort(list1))
