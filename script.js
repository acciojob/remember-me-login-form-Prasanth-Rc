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
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
        
        checkSavedCredentials();
    });

    existingBtn.addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });

    function checkSavedCredentials() {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            existingBtn.style.display = 'block';
            usernameInput.value = savedUsername;
            passwordInput.value = localStorage.getItem('password');
            checkbox.checked = true;
        } else {
            existingBtn.style.display = 'none';
        }
    }
});