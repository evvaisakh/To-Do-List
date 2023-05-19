var username=document.getElementById("username");
var pwd=document.getElementById("pwd");
var usernameerr=document.getElementById("usernameerror");
var pwderr=document.getElementById("pwderror")
// validation using callback
function login(callback){
    function usrname(){
        if(username.value=="admin"){
            return true;
        }
        else{
            return false;
        }
    }
    function pwwd(){
        if(pwd.value=="12345"){
            return true;
        }else{
            return false
        }
    }
    if(usrname()==false&&pwwd()==false){
        usernameerr.innerHTML="Invalid Username";
        usernameerr.style.color="red";
        username.style.border="2px solid red"
        pwderr.innerHTML="Invalid Password";
        pwderr.style.color="red";
        pwd.style.border="2px solid red"
        return false;
    }else if(usrname()==false && pwwd()==true){
        usernameerr.innerHTML="Invalid Username";
        usernameerr.style.color="red";
        username.style.border="2px solid red"
        pwderr.innerHTML="Valid password";
        pwderr.style.color="green";
        pwd.style.border="2px solid green"
        return false;
    }else if(usrname()==true && pwwd()==false){
        pwderr.innerHTML="Invalid Password";
        pwderr.style.color="red";
        pwd.style.border="2px solid red";
        username.style.border="2px solid green"
        usernameerr.innerHTML="Valid username";
        usernameerr.style.color="green";
        return false;
    }else{
        callback()
    }
}
function a(){
    window.open("todo.html");
}