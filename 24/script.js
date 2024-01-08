   
       var users = [
        { username: "pepik", password: "ahoj1" },
        { username: "jana", password: "pizza2" },
        { username: "karel", password: "kočka3"},
        { username: "eva", password: "12345"},
    ];
    function validateLogin(event) {
        event.preventDefault();
        var usernameInput = document.getElementById("username").value;
        var passwordInput = document.getElementById("password").value;
        var validUser = users.find(function(user) {
            return user.username === usernameInput && user.password === passwordInput;
        });
        if (validUser) {
            alert("Úspěšně přihlášen!");
        } else {
            alert("Špatně zadané jméno nebo heslo.");
        }
    }