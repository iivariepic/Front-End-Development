const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const username = document.getElementById("username");
const usernameError = document.querySelector("#username + span.error");

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
    }
});

username.addEventListener("input", () => {
    if (username.validity.valid) {
        usernameError.textContent = "";
        usernameError.className = "error";
    } else {
        showUsernameError();
    }
});

form.addEventListener("submit", (event) => {
    let valid = true;

    if (!email.validity.valid) {
        showEmailError();
        valid = false;
    }

    if (!username.validity.valid) {
        showUsernameError();
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}

function showUsernameError() {
    if (username.validity.valueMissing) {
        usernameError.textContent = "You need to enter a username.";
    } else if (username.validity.tooShort) {
        usernameError.textContent = `Username should be at least ${username.minLength} characters; you entered ${username.value.length}.`;
    } else if (username.validity.patternMismatch) {
        usernameError.textContent = "Username can only contain letters and numbers.";
    }
    usernameError.className = "error active";
}
