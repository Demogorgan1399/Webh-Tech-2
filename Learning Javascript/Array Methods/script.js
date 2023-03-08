let arr = [2, 4,5, 8, 10];

//syntax 
// arr.methodName(function(currentItem, index, array){
//  block of code                                                                                                                    
//})


let newArr = arr.map(function(currentItem, index, array){
    console.log(`CurrentItem is ${currentItem} and index is ${index}`);
    return currentItem*2;
})

console.log(arr);
console.log(newArr);

//filter()
let filteredArr = arr.filter(function (currentItem, index, array){
    return currentItem > 5;
})
console.log(filteredArr);


//every()
let everyArr = arr.every(function(currentItem){
    return currentItem < 11
})
console.log(everyArr);


//some() 
let ageList = [13, 54, 26, 85];
let isAdult = ageList.some(function(currentItem){
    return currentItem < 13;
})
console.log(isAdult);

//sort()
let names = ['Tejas', 'Saurabh','Nikhil'];
console.log(names.sort());

let nums = [4, 9, 8, 2];
let sortedValue = nums.sort(function(a, b){
    return a-b;
})
console.log(sortedValue);


//reduce()
let points = [12, 44, 84, 294, 34];
let reducePoint = points.reduce(function(currentItem,total){
    return total+currentItem;
})
console.log(reducePoint);


//forEach()
points.forEach(function(currentItem){
    console.log(currentItem);
})
