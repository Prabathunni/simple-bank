
// loading to localstorage 

function registerButton(){

  let username = document.getElementById('username').value;
  let accountnumber = document.getElementById('accountnumber').value;
  let password = document.getElementById('password').value;

  let bankObject = {
    username:username,
    accountnumber:accountnumber,
    password:password
  }  

if(bankObject.accountnumber in localStorage){
  alert("Already Registered Account")
}
else{
  localStorage.setItem(bankObject.accountnumber,JSON.stringify(bankObject))
  alert("Registration Successful");


  // to store the logged in user seperately
  localStorage.setItem("loggedInAccount",accountnumber)

  window.location = "./login.html";

}

}

// sign in 

function signIN(){
  window.location = "./login.html";
}