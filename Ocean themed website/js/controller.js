class UserController {
	constructor() {
	  this.users = []
	}
	saveUser(user) {
	  this.users.push(user)
	}
	getUsers() {
	  return this.users
	}
  }
  var userController = new UserController();
  
  document.querySelector("#save-user-btn").addEventListener("click", function(){
	var user = {
	  name: document.querySelector("#name").value,
	  email: document.querySelector("#email").value,
	  password: document.querySelector("#password").value
	}
	userController.saveUser(user)
  })
  document.querySelector("#login-user-btn").addEventListener("click", function(){
	var email = document.querySelector("#email").value
	var password = document.querySelector("#password").value
  
	var users = userController.getUsers()
	for(var i = 0; i < users.length; i++) {
	  if(users[i].email == email && users[i].password == password) {
		console.log("logged in")
		return
	  }
	}
	console.log("Incorrect email or password")
  })
  