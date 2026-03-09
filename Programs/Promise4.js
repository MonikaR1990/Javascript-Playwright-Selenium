function checkBalance(balance)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(balance>1000)
        {
            resolve("You can withdraw money")
        }
        else
        {
            reject("Insufficient Balance")
        }
    }, 3000);
    });
}

checkBalance(500)
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})