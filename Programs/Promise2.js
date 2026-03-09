function foodOrder()
{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("Pizza Delivered")
        }, 3000);
    });
}

foodOrder().then(function(result)
{
    console.log(result);
});


