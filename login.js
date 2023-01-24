const fs = require('fs'); 
const form = document.querySelector("form"); 
form.addEventListener("submit", (e) => {   e.preventDefault();   
	const email = document.querySelector("input[name='email']").value;   
	const username = document.querySelector("input[name='username']").value;   
	const password = document.querySelector("input[name='password']").value;   
	const rpassword = document.querySelector("input[name='rpassword']").value;   

	if (!email || !username || !password || !rpassword) {     
		console.log("Please fill out all fields");     
	return;   
}   
	if (password !== rpassword) {     
		console.log("Passwords do not match");     
	return;   
}   
if (password.length < 8) {     
	console.log("Password must be at least 8 characters");     
	return;   
}   
const data = { email, username, password };   
fs.writeFile('Output.txt', JSON.stringify(data), (err) => {     
	if (err) throw err;     
	console.log('Data written to file');   
}); 
});