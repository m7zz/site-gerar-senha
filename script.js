const inputEl = document.querySelector("#password");
inputEl.setAttribute("readonly", true);

const upperCaseCheckEl = document.querySelector('#uppercase-check');
const numberCheckEl = document.querySelector('#number-check');
const symbolCheckEl = document.querySelector('#symbol-check');

let passwordlength = 16;

function generatepassword() {
    let chars = "abcdefghjklmnpqrstuvwxyz";

    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const numberChars = "123456789";
    const symbolChars = "!@#$%&*()[]";

    if (upperCaseCheckEl.checked) {
        chars += upperCaseChars;
    }

    if (numberCheckEl.checked) {
        chars += numberChars;
    }

    if (symbolCheckEl.checked) {
        chars += symbolChars;
    }

    let password = "";

    for (let i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }

    inputEl.value = password;
}

function copy() {
    navigator.clipboard.writeText(inputEl.value);
}

const passwordlengthEl = document.querySelector("#password-length");
const passwordLengthTextEl = document.querySelector("#password-length-text");

passwordlengthEl.addEventListener("input", function() {
    passwordlength = passwordlengthEl.value;
    passwordLengthTextEl.textContent = passwordlength;  
    generatepassword();
});

upperCaseCheckEl.addEventListener("click", generatepassword);
numberCheckEl.addEventListener("click", generatepassword);
symbolCheckEl.addEventListener("click", generatepassword);

const copyButtonEl = document.querySelector("#copy");
copyButtonEl.addEventListener("click", copy);

const regenerateButtonEl = document.querySelector("#regenerate");
regenerateButtonEl.addEventListener("click", generatepassword);

generatepassword();
