
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    // Validate name
    let namePattern = /^[A-Za-z ]+$/;

    if (name === "" || !namePattern.test(name)) {
        alert("Please enter a valid name using letters only.");
        return false;
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate mobile number
    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    // Validate username
    if (username === "") {
        alert("Username cannot be empty.");
        return false;
    }

    // Validate password
    let upper = /[A-Z]/.test(password);
    let lower = /[a-z]/.test(password);
    let digit = /[0-9]/.test(password);
    let special = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8 || !upper || !lower ||
        !digit || !special) {
        alert("Password must contain at least 8 characters, " +
              "one uppercase letter, one lowercase letter, " +
              "one digit, and one special character.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
