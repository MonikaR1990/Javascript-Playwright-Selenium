//1. 1XX Series - Information Related (Rare Use)
// 100 - Continue (Request Received, Still Processing)

//2. 2XX Series - Success - Importance
// 200 - Request Successfull (GET API return data)
// 201 - Resorce Created Successfully (POST API) (Create new Record)
// 204 - Success but no response body (DELETE API)

//3. 3XX Series - Redirection (Resource moved)
// 301 - Moved Permenantly
// https://api.company.com/v1/users 
// https://api.company.com/v2/users

// 302 - Temporary removed (Login Redirect)

//4. 4XX Series - Client Error (Wrong Request send to server, server will reject it)
// 400 - Bad Request 

//Request
// {                                          
//   "email": "usergmail.com",   ❌ missing @
//   "password": "Test@123"
// }

//Responce 400 Bad Request
//{
// error: Invalid Email format
//}

//Request
// {                                          
//   "email": "user@gmail.com"
// }

//Response
//{
// error: Missing password
//}

// 401 - Unauthorized
// GET /api/profile
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Response
// 200

// 403 - Forbidden - Access Denied
// POST /api/product/delete
// Seller/Admin only

// 404 - Not Found (Resource Not Found) 
// GET /api/users/101
// 200 OK
// {
//   "id": 101,
//   "name": "Monika"
// }

// Response
// 404 Found
// {
//     "error": "User not Found"
// }

//405 - Method Not Allowed

// 409 Data Conflict (Register Same Email) 

// 5XX series - Server side

// 500 Internal server Error
// 502 Bad Gatway
// 503 Service Unavailable







