

function checkIfSuccess(data){

    return new Promise(function(resolve, reject){
        if(data === 'success'){
            return resolve('successfuly executed');
        } else {
            return reject('unseccusefully executed');
        }
    })
}

checkIfSuccess('succ').then(function(result){
    console.log(result);
}).catch(function(error){
    console.error(error);
})


fetch('https://github.com/Demogorgan1399').then(function(response){
    console.log(response);
})