// pop method to remove last element

let arr = [3,5,2,6,8,9];
arr.pop();
console.log(`pop method ------->`, arr);

// push method to add element at last index

arr.push(7);
console.log(`push method ------->`, arr);

//shift method to remove element from first index

arr.shift();
console.log(`shift method ------->`, arr);

//unshift to add element at first index

arr.unshift(0);
console.log(`unshift method ------->`, arr);

//sort to sort an array

arr.sort();
console.log(`sort method ------->`, arr);

//at to get an element at any index

 let elem = arr.at(2);
 console.log(`Element at index 2 is: `,elem);

//concat method to join two arrays

let arr1 = [2,3,4,5];
let arr2 = [7,8,9,0];
console.log(arr1.concat(arr2)); // returns a new array

//join method returns the new string by concatinating all elments of array.

let arrJoin = ['hello', 'there!','Welcome']
console.log(`Join Method ------>`, arrJoin.join()); 

//every method return value in true false and if any element doesn't satisfy condition returns false.

const checkFun = (checkValue) => checkValue < 7; 

console.log(`every method ------->`, arr.every(checkFun));

//some method return value in true false and if any element satisfy condition returns true.

console.log(`some method ------->`, arr.some(checkFun));

//find method return the first element which satisfy the condition/

console.log(`find method ------->`, arr.find(checkFun));

//findIndex method return the first element index which satisfy the condition.

console.log(`findIndex method ------->`, arr.findIndex(checkFun));

//flat method creates a new array with all sub-array elements concatinated in it recursively.

const arr3 = [1,2,3,4,5,[[[6,7,8,9]]],10];
console.log(`flat method ------->`, arr3.flat(3));    //3 is depth

//for each loop modifies array and execute provided function on each element once.

const arr4 = [90,80,70,60,50];
arr4.forEach(function(item){
    console.log( item / 10);
});

//map method creates a new array and execute provided function on each element once.

const arr5 = [9,8,7,6,5];
let arrMap = arr5.map(item => item * 10);
console.log(`Map method ------->`, arrMap);

//filter method to filtered down elements which satisfy condition. creates a new array.

let arrFilter = arr5.filter(item => item<8);
console.log(`Filter method ------->`, arrFilter);

//reduce method executes a reducer function and creates a single value known as function's accumulated result.

const sumReduce = arr5.reduce((accumulator , currentValue) => accumulator + currentValue);
console.log(`Reduce method ------->`, sumReduce);

//Array.from method converts a object,string to array.

const name = ('Rao Rabi');
console.log(`Array.from method ------->`, Array.from(name));

//indexOf method returns the first index at which an element can be found

const array = [45,42,46,89,47,89,234,567];
console.log(`indexOf method ------->`, array.indexOf(46));

//reverse method reverses an array

console.log(`reverse method ------->`, array.reverse());

//slice method returns a new array of portion of the original array.

console.log(`slice method ------->`, array.slice(1,5));

//splice method modifies the array by removing or adding elements

const arraySplice  = ['Drum', 'Horn', 'Guittar', 'Piano'];
arraySplice.splice(1,0,'Harmonium'); //adding harmonium at index 1 and nothing is removed
console.log(`splice method ------->`, arraySplice);

arraySplice.splice(1,3) //removing elements
console.log(`splice method ------->`, arraySplice);

//with method used to replace element in an array and returns a new array

const arrWith = [2,3,4,5,6,0,7,8];
console.log(`with method ------->`, arrWith.with(5,9)); //it will replace index 5 element with 9
