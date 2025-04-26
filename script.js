function checkPassword() {
    const correctPassword = "heiswatching"; // <<<<< YOUR PASSWORD HERE
    const userPassword = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (userPassword === correctPassword) {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        errorMessage.textContent = "Incorrect password. Try again.";
    }
}