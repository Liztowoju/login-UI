let formElement = document.getElementById("login-form")
let errors = [];

function validatePhoneOrEmail(inputEl) {
    let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (inputEl.value.match(phoneFormat) || inputEl.value.match(emailFormat)) {
        return true;
    } else {
        errors.push("Please enter a valid email or phone number. Phone number shouldn't be more than 10 digits");
        return false;
    }
}

function validatePassword(pw) {

    //check empty password field  
    if (pw == "") {
        errors.push( "**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        errors.push( "**Password length must be atleast 8 characters" );
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        errors.push( "**Password length must not exceed 15 characters" );
        return false;
    } else {
        return true;
    }
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    errors = [];

    let emailOrPhone = document.getElementById("email_or_phone");
    validatePhoneOrEmail(emailOrPhone);

    let password = document.getElementById("password").value;
    validatePassword(password);

    if (errors.length > 0){
        // alert( errors[0] );
        // console.log(document.querySelector('form-errors'));
        // document.querySelector('#form-errors').innerHTML = errors;

        let output = "<ol>";
        errors.forEach(function(item){
            output += '<li>' + item + '</li>';
        });
        // output += '<li>' + errors[0] + '</li>';
        output += "</ol>";

        document.querySelector('#form-errors').innerHTML = output;
        // console.log(output);
    }
    // console.log(errors)
})
