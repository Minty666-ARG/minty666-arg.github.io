function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // List of passwords and where they should go
    const passwordMap = {
        "heiswatching": "23-15-31-35-32-15.html",
        "HELP ME": "astra.html",
        "bird789": "birds.html"
    };

    if (passwordMap[passwordInput]) {
        // Redirect to the correct page
        window.location.href = passwordMap[passwordInput];
    } else {
        // Show error
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
