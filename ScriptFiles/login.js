//   loginpage
function login() {
  var loginemail = document.getElementById("loginemail").value;
  var loginpassword = document.getElementById("loginpassword").value;

  if (loginemail === "" || loginpassword === "") {
    alert("Please enter both username and password.");
  } else {
    window.location.href = "MasterPage.html";
  }
}
