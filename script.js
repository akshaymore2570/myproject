// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
    var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
        // Here you can add code to handle login logic, like sending a request to a backend server
	  console.log('Username:', username);
	    console.log('Password:', password);
	    });

