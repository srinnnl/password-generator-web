// Get elements from HTML
const passwordDisplay = document.getElementById("passwordDisplay");
const lengthInput = document.getElementById("lengthInput");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// Character sets
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{};:,.<>?";

// Generate password function
function generatePassword() {
    let length = Number(lengthInput.value);
    let charset = letters;

    if (includeNumbers.checked) charset += numbers;
    if (includeSymbols.checked) charset += symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordDisplay.textContent = password;
}

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1000);
});

// Generate button click
generateBtn.addEventListener("click", generatePassword);
