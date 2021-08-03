let alertBox = document.querySelector(".alertBox");

const getPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  let passwordLength = 16;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
  alertBox.innerHTML = "New Password Copied: <br>" + password;
}

// copy password to clipboard and display alert
const copyPassword = () => {
  let copyPassText = document.getElementById("password");
  copyPassText.select();
  copyPassText.setSelectionRange(0, 9999);
  document.execCommand("copy");
  alertBox.classList.toggle("active");
  setTimeout(function () {
    alertBox.classList.toggle("active");
  }, 2000);
}
