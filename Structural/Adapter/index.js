const localStorage = require('./LocalStorage');

//It may be necessary to work locally when we are not working on the browser.
//We cant use LocalStorage on local.

console.log("LocalStorage items count:",localStorage.length);

let uid = localStorage.getItem('user_id');

if(!uid){
    console.log("User ID Not found. Creating user...")
    localStorage.setItem('user_id','Usr4323242424');
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    localStorage.setItem('token',token);
}
else{
    console.log("User ID:",uid);
    console.log("Clearing user and data");
    localStorage.clear();
}