let userName = '';
let email = '';
let password = '';
let userExists = false;
let registered = false;
const formContainer = document.getElementById("form-container");
const profileContainer = document.getElementById("profile-container");
const userDatabase = ["John", "Jane", "Bob", "Ashley"];

function formInput(e) {
    e.preventDefault();
    userName = e.target.username.value;
    email = e.target.email.value;
    password = e.target.password.value;
    checkExistingUser(userDatabase);
}
function checkExistingUser(array) {
    for (let i = 0; i < array.length; i++) {
        formValidate(userName, email, password);
        if (userName === array[i]) {
            console.log("Taken");
            return true;
        }
    }
    return false;
}
function formValidate(usernameVar, emailVar, passwordVar) {
    if (usernameVar && emailVar && passwordVar) {
        console.log("Your account is complete");
        registered = true;
        formValidate(registered);
    } else {
        console.log("All form fields must be filled out");
    }
}

function renderProfile(registeredBoolean) {
    if (registeredBoolean === true) {
        formContainer.setAttribute("id", "none");
        profileContainer.style.visibility = "visible";
    }
}