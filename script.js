const passwordBox = document.getElementById("password");
const length = 12;

const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbol = "@#$%^&*()_+~|}{[]></-=";

const allCharacters = upperCaseCharacters + lowerCaseCharacters + number + symbol;

function createPassword () {
    let password = "";
    password += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
    password += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}


