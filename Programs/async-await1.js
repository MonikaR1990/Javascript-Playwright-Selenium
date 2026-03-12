function loginUser(username, password)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username ==="admin" && password === "admin123")
            {
                resolve("User Logged in Sucessfully");
            }
            else
            {
                reject("Invalid Login");
            }
        }, 3000);
    })
}

function getProfile(isLoggedIn)
{
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(isLoggedIn)
            {
                resolve("User Profile Loaded")
            }
            else
            {
                reject("User not Logged In");
            }
        }, 2000);
    })   
}


//Promise Handling

// loginUser("admin123", "admin123")
// .then((reslut)=>{
//     console.log(reslut);

//     return getProfile(false);
// })
// .then((profile)=>{
//     console.log(profile)
// })
// .catch((error)=>{
//     console.log("Something Went Wrong ", error)
// })

async function showProfile() 
{
try
{

    let login = await loginUser("admin122", "admin123");
    console.log(login);

    let profile = await getProfile(false);
    console.log(profile);
}

catch(error)
{
    console.log("Something Went Wrong: " , error)
}
}

showProfile();

