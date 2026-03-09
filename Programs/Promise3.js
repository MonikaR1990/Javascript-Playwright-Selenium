function loginUser(username, password)
{
    return new Promise((resolve, reject)=>{
        
        if(username === "admin11" && password ==="admin123")
        {
            resolve("Login Success")
        }
        else{
            reject("Login Failed")
        }

    });
}

loginUser("admin", "admin123")
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
