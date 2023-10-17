let logStatus = localStorage.getItem("logedInUser");
console.log("loggedin value-----", logStatus);
if (!logStatus) {
  window.location.href = "./login.html";
}
