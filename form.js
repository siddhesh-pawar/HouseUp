class FormValidator {
    validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;

        return this.validateInputs(name, email, password, repassword);
    }

    validateInputs(name, email, password, repassword) {
        if (name === "" || email === "" || password === "" || repassword === "") {
            this.showAlert("All fields are required");
            return false;
        }

        if (password !== repassword) {
            this.showAlert("Passwords do not match");
            return false;
        }

        return true;
    }

    showAlert(message) {
        alert(message);
    }
}

module.exports = FormValidator;
