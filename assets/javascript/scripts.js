// Assignment Codeto associate the generate id with the button
var generateButton = document.querySelector("#generate").addEventListener("click", publishPassword);


// function to publish password from function generatePassword
function publishPassword() {
    var passwordNew = document.querySelector("#password");
    // passwordNew.innerHTML = generatePassword();
    passwordNew.value = generatePassword();
}

function generatePassword() {
    // declare variables 
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numerics = "0123456789";
    var specials = "!@#$%^&*()_+";
    var charLength = "";
    // var finalPassword = '';

    // WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
    var charLength = prompt("Please enter password length between 8 characters and 128 characters:");
    // check user input if it's betw 8 to 128 characters
    while (charLength < 8 || charLength > 128) {
        var charLength = prompt("Password length must be a value between 8 to 128.")
    }

    // WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
    var confirmLowers = confirm("Click OK to include lower case characters in password.");
    var confirmUppers = confirm("Click OK to include upper case characters in password.");
    var confirmNumerics = confirm("Click OK to include numerical characters in password.");
    var confirmSpecials = confirm("Click OK to include special characters in password.");

    // THEN my input should be validated and at least one character type should be selected
    while (confirmLowers === false && confirmUppers === false && confirmNumerics === false && confirmSpecials === false) {
        alert("Must choose at lease one parameter");
        confirmLowers = confirm("Click OK to include lower case characters in password.");
        confirmUppers = confirm("Click OK to include upper case characters in password.");
        confirmNumerics = confirm("Click OK to include numerical characters in password.");
        confirmSpecials = confirm("Click OK to include special characters in password.");
    }

    // build password string depending on user input-
    var passwordStr = '';

    if (confirmLowers == true) {
        passwordStr += lowers;
        console.log(passwordStr);
    }
    if (confirmUppers == true) {
        passwordStr += uppers;
        console.log(passwordStr);
    }
    if (confirmNumerics == true) {
        passwordStr += numerics;
        console.log(passwordStr);
    }
    if (confirmSpecials == true) {
        passwordStr += specials;
        console.log(passwordStr);
    }
    console.log(passwordStr);

    // create for loop to choose password characters 
    var finalPassword = '';

    for (var i = 0; i < charLength; i++) {
        var char = Math.floor(Math.random() * passwordStr.length);
        finalPassword += passwordStr.charAt(char);
        console.log(finalPassword);
    }
    return finalPassword;


    // document.getElementById("password").value = finalPassword;
}

// copy password to clipboard function 
function copyPassword() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied password to Clipboard:  " + copyText.value);
}

var copyButton = document.querySelector("#copy").addEventListener("click", copyPassword);

