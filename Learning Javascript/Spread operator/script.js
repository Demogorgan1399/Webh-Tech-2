
//Example of spread operator

let arr = ["a", "b", "c"];
console.log(arr);

console.log(arr[1]);
arr.push("3");
console.log(arr);
 
var obj = {
    "name" : "goto",
    "age" : 23,
    "full name" : "Saurabh Yerpude"
}
console.log(obj.age);
console.log(obj["full name"]);

//2. Combining Array
let arr1 = ["Goa", "Mumbai"];
let arr2 = ["Nagpur", "Pune"];

let arr3 = [...arr1, ...arr2];
console.log(arr3);


//3.adding values to array 
let arr4 = ["x", "y", "z"];
let arr5 = [...arr4, "kumar"];
console.log(arr5);

//4. cobining values of object 

let obj1 = {
    name : "Salesforce",
    age : 23 
}
let obj2 = {
    founder: "Mark Bennioff",
    date : "23/10/1999"
}

let obj3 = {...obj1, ...obj2}
console.log(obj3);

//5. Shallow copy 
var arr10 = ["a", "b", "c"];
// arr10.push(15);
// console.log(arr10);
// copying array like this will copy reference as well
// var arr11 = arr10;
// arr11.push("ashish");
// console.log(arr10);
// console.log(arr11);

var arr11 = [...arr10];
arr11.push("Ashish");
console.log(arr10);
console.log(arr11);


//6. Nested copy 
var arrObj = [
    {name: "Salesforce"},
    {name: "Spiderman"}
];

var arrObj1 = [...arrObj];
console.log(arrObj1);
arrObj1[1].name = "Iron Man";
console.log(arrObj1);
console.log(arrObj);

var arrObj2 = [
    {name: "Salesforce"},
    {name: "Spiderman"}
]

var arrObj3 = JSON.parse(JSON.stringify(arrObj2));
arrObj3[1].name = "Iron Man";
console.log(arrObj2);
console.log(arrObj3);