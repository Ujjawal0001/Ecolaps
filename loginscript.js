document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('forgot-password').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
});

document.getElementById('back-to-login-from-reset').addEventListener('click', function() {
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});
