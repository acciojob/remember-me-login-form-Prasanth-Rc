//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const submitBtn = document.getElementById('submit');
    const existingBtn = document.getElementById('existing');

    checkSavedCredentials();

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        alert(`Logged in as ${username}`);
        
        if (checkbox.checked) {
            localStorage.setItem('rememberedUsername', username);
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedUsername');
            localStorage.removeItem('rememberedPassword');
        }
        
        checkSavedCredentials();
    });

    existingBtn.addEventListener('click', function() {
        const savedUsername = localStorage.getItem('rememberedUsername');
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });

    // Function to check for saved credentials
    function checkSavedCredentials() {
        const savedUsername = localStorage.getItem('rememberedUsername');
        if (savedUsername) {
            existingBtn.style.display = 'block';
            usernameInput.value = savedUsername;
            passwordInput.value = localStorage.getItem('rememberedPassword');
            checkbox.checked = true;
        } else {
            existingBtn.style.display = 'none';
        }
    }
});