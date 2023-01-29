var userController = new UserController();

var signUpTab = document.getElementById("sign-up-tab")
var signInTab = document.getElementById("sign-in-tab")
var users = []

signUpTab.addEventListener("click", function(){
  signUpTab.setAttribute('class', 'active');
  signInTab.setAttribute('class', 'inactive');
  document.getElementById("sign-up").style.display = "block"
  document.getElementById("sign-in").style.display = "none"
})

signInTab.addEventListener("click", function(){
  signInTab.setAttribute('class', 'active');
  signUpTab.setAttribute('class', 'inactive');
  document.getElementById("sign-in").style.display = "block"
  document.getElementById("sign-up").style.display = "none"
})

document.getElementById("save-user-btn").addEventListener("click", function(){
  var user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  }
  userController.saveUser(user)
})
document.getElementById("login-user-btn").addEventListener("click", function(){
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value

  var users = userController.getUsers()
  for(var i = 0; i < users.length; i++) {
    if(users[i].email == email && users[i].password == password) {
      console.log("logged in")
      return
    }
  }
  console.log("Incorrect email or password")
})


