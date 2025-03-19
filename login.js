// Take the values 

function loginButton() {
  let accountnumber = document.getElementById('accountnumber').value;
  let password = document.getElementById('password').value;

  // Fetch the object from localStorage
  let carObject = JSON.parse(localStorage.getItem(accountnumber));

  if (accountnumber && carObject) {
    // Check if the entered password matches the stored one
    if (carObject.password === password) {
      window.location="./cash.html"
    } else {
      alert('Incorrect password');
    }
  } 
  else {
    alert('Account not found');
  }
}


function signUP(){
  window.location="./register.html"
}