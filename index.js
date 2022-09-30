let loginBtn = document.querySelector('.login_button')
    loginBtn.addEventListener('click', function() {
        location.href = 'login.html'
    })
    let signupBtn = document.querySelectorAll('.sign_up_btn')
    signupBtn.forEach(function(elem) {
        elem.addEventListener('click', function() {
            location.href = 'pricing.html'
        })
    })