let formElement = document.getElementById("login-form")

function validatePhoneOrEmail(inputEl) {
    let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emalFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (inputEl.value.match(phoneFormat) || inputEl.value.match(emalFormat)) {
        return true;
    } else {
        alert("Please match the stated format");
        return false;
    }
}

function validatePassword(inputEl){

}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("email_or_phone")
    validatePhoneOrEmail(emailOrPhone);

    
})

// let pa