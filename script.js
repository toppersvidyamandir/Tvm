const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
});

// Prevent form submission for demo
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login button clicked!');
});
