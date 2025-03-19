// welcome user
window.onload = function () {
  let loggedInAccount = localStorage.getItem("loggedInAccount"); // Get stored account number

  if (loggedInAccount) {
      let userData = JSON.parse(localStorage.getItem(loggedInAccount)); // Retrieve user details

      if (userData && userData.username) {
          document.getElementById("welcomeuser").innerText = `Welcome, ${userData.username}!`;
      } else {
          document.getElementById("welcomeuser").innerText = "Welcome, Guest!";
      }
  } else {
      document.getElementById("welcomeuser").innerText = "Welcome, Guest!";
  }
};



// Deposit Function
function depositButton() {
    let depositAmount = parseFloat(document.getElementById('depositamount').value);
    let accountNumber = document.getElementById('accountnumber').value;

    if (!accountNumber || isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid account number or amount!");
        return;
    }

    // Get existing balance or set to 0
    let currentBalance = parseFloat(localStorage.getItem(accountNumber)) || 0;

    // Update balance
    let newBalance = currentBalance + depositAmount;
    localStorage.setItem(accountNumber, newBalance);

    alert("Amount Credited to Bank Successfully");
    document.getElementById('depositResult').innerText = `Balance: ${newBalance}`;
}

// Withdrawal Function
function withdrawButton() {
    let withdrawAmount = parseFloat(document.getElementById('withdrawamount').value);
    let accountNumber = document.getElementById('acnumber').value;

    if (!accountNumber || isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid account number or amount!");
        return;
    }

    // Get current balance
    let currentBalance = parseFloat(localStorage.getItem(accountNumber)) || 0;

    if (withdrawAmount > currentBalance) {
        alert("Insufficient Balance!");
    } else {
        let newBalance = currentBalance - withdrawAmount;
        localStorage.setItem(accountNumber, newBalance);
        alert("Withdrawal Successful!");
        document.getElementById('withdrawResult').innerText = `Balance: ${newBalance}`;
    }
}


// logout user delete the complete data in the localstorage

function logout(){
    localStorage.clear()
    alert("Logout Successfull")
    window.location='./index.html'
}
