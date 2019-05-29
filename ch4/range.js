

//loops thru array to get all values between 2 numbers

function allNumbers(start, end) {
    let list = [];
    for (let i = start; i <= end; i++)
    {list.push(i);}
    console.log(list);
    return list;
}
allNumbers(3,8);
   
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++)
    { total = total + arr[i];
       }
    console.log(total);    
}
    sum([1,5,6]);

///Reversing an array

function reverseArr(arr){    
    arr.reverse(arr);
    console.log(arr);
}
reverseArr([4,3,2,1]);
 
  /// or stepping thru an array in reverse
  
function reverseArrStep (arr){
    let output = [];
    for (let i = arr.length -1; i >= 0; i-- ){
    output.push(arr[i]);  
    }   
    console.log(output);
}
reverseArrStep([99,88,77,66]);

//array to list - DIFFICULT

function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i --)
    {list = 
        {value: arr[i], rest: list};
    } 
    return list;    
    }

    console.log(arrayToList([1,2,4]));

    
