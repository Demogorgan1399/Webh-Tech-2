
// function firstFunction(){
//     console.log('Hurray');
// }


document.addEventListener("mousemove", handler)
function handler() {
    document.querySelector('.demo').innerHTML = Math.random();
}

function removeHandler(){
    document.removeEventListener("mousemove", handler )
}


//custom event 
function customMethod(){
    let evt = new CustomEvent ("firstEvent" , { 
    detail:{name: "Send My Hello"}
    });
    document.dispatchEvent(evt);
}

doucument.addEventListener("firstEvent", function(data){
    console.log('Hi JS' , data.detail);
})