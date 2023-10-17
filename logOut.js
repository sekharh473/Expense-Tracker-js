let logout=()=>{
    localStorage.removeItem("logedInUser")
    window.location.href="login.html"
}