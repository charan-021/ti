// show and hide password
function unlock(lock,unlock,pass){
    document.getElementById(lock).style.zIndex = 1;
    document.getElementById(unlock).style.zIndex = -1;
    var pd=document.getElementById(pass);
    if(pd.type === "text"){
      pd.type = "password";
    }
  }
  function lock(lock,unlock,pass){
    document.getElementById(lock).style.zIndex = -1;
    document.getElementById(unlock).style.zIndex = 1;
    var pd=document.getElementById(pass);
    if(pd.type === "password"){
      pd.type = 'text';
    }
  }

  // getting elements
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");

  document.querySelector("label.login").addEventListener("click", login);
  document.querySelector("label.login_now").addEventListener("click", login);
  function login() {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  }
  document.querySelector("label.signup").addEventListener("click", signup);
  document.querySelector("label.signup_now").addEventListener("click", signup);
  function signup() {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  }

  