function getData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Loaded");
        }, 3000);
    })
}

// getData().then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

async function showData()
{
   let result = await getData();
   console.log(result)
}

showData();

showData();

showData();

