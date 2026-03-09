function loginUser(callback)
{
    console.log("User logged in");
    callback();
}

function getUserProfile(callback)
{
    console.log("User Profile fetched");
    callback();
}

function getUserPost(callback)
{
    console.log("User Post Fetched");
    callback();
}

function displayPost()
{
    console.log("Display Post");
   
}

loginUser(function()
{
    getUserProfile(function()
    {
        getUserPost(function()
    {
        displayPost();
    });
    });
});


