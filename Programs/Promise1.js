//Promise - is an Object that repreasents the result of an asynchronous Operation

//Promise has 3 states

//1. Pending
//2. FulFilled (Success)
//3. Rejected (Failure)

//Basic Syntax of Promise
let promise = new Promise((resolve, reject)=>{

});

//resolve() --> success result
//reject() --> error result

let newPromise = new Promise((resolve, reject)=>{

    let success = true;

    if(success)
    {
        resolve("Task Completed")
    }
    else
    {
        reject("Task Failed");
    }
});

//Handling Promise
//.then()
//.catch()

newPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})





