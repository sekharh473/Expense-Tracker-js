let logStatus = localStorage.getItem("logedInUser");
console.log("loggedin value-----", logStatus);
if (logStatus) {
  window.location.href = "./dashboard.html";
}

let allRegisteredusers = JSON.parse(localStorage.getItem("regUsers"));

let handleSubmit = () => {
  console.log("ok");
  console.log(allRegisteredusers);

  let emailgot = document.getElementById("email").value;
  if (!emailgot) {
    let enteremail = document.getElementById("mail-necessary");
    enteremail.setAttribute("style", "display:block;color:red");
    return;
  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailgot)) {
      document.getElementById("mail-necessary").innerHTML = "Invalid Email*";
      var invalidemail = document.getElementById("mail-necessary");
      invalidemail.setAttribute("style", "display:block;color:red");
      // alert("Invalid Email")
      return;
    }
  }

  let pwd = document.getElementById("password").value;
  if (!pwd) {
    var enterpassword = document.getElementById("pass-necessary");
    enterpassword.setAttribute("style", "display:block;color:red");
    // alert("Please enter password.")
    return;
  }

  if (!allRegisteredusers || allRegisteredusers.length < 1) {
    alert("Please register first");
    return;
  }

  let findUser = allRegisteredusers.find(({ email }) => email === emailgot);
  if (!findUser) {
    let en = document.getElementById("mail-necessary");
    en.setAttribute("style", "display:block;color:red");
    // alert("Email is not registered")
    return;
  }

  if (findUser.password !== pwd) {
    document.getElementById("pass-necessary").innerHTML = "Wrong Password*";
    var wrongpass = document.getElementById("pass-necessary");
    wrongpass.setAttribute("style", "display:block;color:red");
    // alert("Wrong Password")
    return;
  }

  localStorage.setItem("logedInUser", JSON.stringify(findUser));
  window.location.href = "dashboard.html";
};
