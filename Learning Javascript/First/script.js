let arr = [2, 3, 4, 5, 6];

//map()
//syntax

//arr.methodName(function(currentItem , index ,actualArray)}

//})

// Map() function loop over an array and return an array as output
let newArr = arr.map(function (currentItem, index, array) {
    console.log(`currnentItem is ${currentItem} index is ${index},  array ${array}`);
    return currentItem * 2
});
console.log(newArr);

// filter() fuction used to filter out values
let filteredValues = arr.filter(function (currentItem, index, array) {
    return currentItem > 4
});
console.log(filteredValues);


//every() function checks if all items in an array satisfy the condition or not and return true or false
let age = [19, 34, 27, 42, 53];
let allAge = age.every(function (currentItem) {
    return currentItem > 18
});
console.log(allAge);


//sum() function checks if some fo items in an array satisfy the condition or not and return true or false
let someAdult = age.some(function (currentItem) {
    return currentItem > 27
});
console.log(someAdult);

//sort()   used for sorting the array 
var names = ['Tejas', 'Nikhil', 'Saurabh'];
console.log(names.sort());

var points = [90, 5, 12, 30, 45];
let sortednum = points.sort(function (a, b) {
    return a - b
});
console.log(sortednum);


//reduce() method it use to reduce the value under single digit
//array.reduce(function (toatal, currentValue, index, array) {

//}, initialValue)

let nums = [34, 74, 36];
let sum = nums.reduce(function (total, currentItem) {
    return total + currentItem
}, 0);
console.log(sum);

//forEach() it is for loop for fuctional programing 
nums.forEach(function (currentItem) {
    console.log(currentItem)
});