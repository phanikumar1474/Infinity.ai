document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "index.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const storedUser = JSON.parse(localStorage.getItem("user"));
            const enteredEmail = document.getElementById("email").value;
            const enteredname = document.getElementById("name").value;
            const enteredPassword = document.getElementById("password").value;

            if (storedUser && storedUser.email === enteredEmail && storedUser.password === enteredPassword && storedUser.name === enteredname) {
                alert(`Welcome back, ${storedUser.name}! Redirecting to main page...`);
                window.location.href = "main.html"; 
            } else {
                alert("Invalid email or password. Try again.");
            }
        });
    }
});
