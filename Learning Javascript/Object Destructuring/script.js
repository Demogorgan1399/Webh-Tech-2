
//Array Destructuring

var arr = ["Dog", "Cat", "Mouse"];

// var pet1 = arr[0];
// var pet2 = arr[1];
//Instead of this we can use 

var [pet1, pet2] = arr;
console.log(pet1);
console.log(pet2);


//Object Destructuring 
var obj = {
    company1 : "Netflix",
    company2 : "Amazon"
}

// var company1 = obj.company1;
//instead of this we can use 

var {company1, company2} = obj
console.log(company1);
console.log(company2);