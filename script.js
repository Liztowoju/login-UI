let formElement = document.getElementById("login-form")

function validatePhoneOrEmail(inputEl) {
    let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (inputEl.value.match(phoneFormat) || inputEl.value.match(emailFormat)) {
        return true;
    } else {
        alert("Please enter a valid email or phone number. Phone number shouldn't be more than 10 digits");
        return false;
    }
}

function validatePassword(pw) {

    //check empty password field  
    if (pw == "") {
        alert( "**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert( "**Password length must be atleast 8 characters" );
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert( "**Password length must not exceed 15 characters" );
        return false;
    } else {
        alert("Password is correct");
    }
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("email_or_phone");
    validatePhoneOrEmail(emailOrPhone);
    let password = document.getElementById("password").value;
    validatePassword(password);


})
