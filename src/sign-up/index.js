import makeUser from './make-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

});

