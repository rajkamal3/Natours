import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import { showAlert } from './alerts';

// DOM Elements
const mapBox = document.querySelector('#map');
const loginForm = document.querySelector('.btn--green');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.querySelector('#book-tour');

// Delegation
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

if (loginForm)
    loginForm.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
    userDataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);

        updateSettings(form, 'data');
    });

if (userPasswordForm)
    userPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        document.querySelector('.btn--save-password').textContent =
            'Updating...';
        const passwordCurrent = document.querySelector('#password-current')
            .value;
        const password = document.querySelector('#password').value;
        const passwordConfirm = document.querySelector('#password-confirm')
            .value;
        await updateSettings(
            { passwordCurrent, password, passwordConfirm },
            'password'
        );
        document.querySelector('.btn--save-password').textContent =
            'Save password';
        document.querySelector('#password-current').textContent = '';
        document.querySelector('#password').textContent = '';
        document.querySelector('#password-confirm').textContent = '';
    });

if (bookBtn)
    bookBtn.addEventListener('click', (e) => {
        e.target.textContent = 'Processing...';
        const { tourId } = e.target.dataset;
        bookTour(tourId);
    });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);

// /* eslint-disable */
// import '@babel/polyfill';
// import { displayMap } from './mapbox';
// import { login, logout } from './login';
// import { updateSettings } from './updateSettings';
// import { bookTour } from './stripe';
// import { showAlert } from './alerts';

// // DOM ELEMENTS
// const mapBox = document.getElementById('map');
// const loginForm = document.querySelector('.form--login');
// const logOutBtn = document.querySelector('.nav__el--logout');
// const userDataForm = document.querySelector('.form-user-data');
// const userPasswordForm = document.querySelector('.form-user-password');
// const bookBtn = document.getElementById('book-tour');

// // DELEGATION
// if (mapBox) {
//     const locations = JSON.parse(mapBox.dataset.locations);
//     displayMap(locations);
// }

// if (loginForm)
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         login(email, password);
//     });

// if (logOutBtn) logOutBtn.addEventListener('click', logout);

// if (userDataForm)
//     userDataForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const form = new FormData();
//         form.append('name', document.getElementById('name').value);
//         form.append('email', document.getElementById('email').value);
//         form.append('photo', document.getElementById('photo').files[0]);

//         updateSettings(form, 'data');
//     });

// if (userPasswordForm)
//     userPasswordForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         document.querySelector('.btn--save-password').textContent =
//             'Updating...';

//         const passwordCurrent = document.getElementById('password-current')
//             .value;
//         const password = document.getElementById('password').value;
//         const passwordConfirm = document.getElementById('password-confirm')
//             .value;
//         await updateSettings(
//             { passwordCurrent, password, passwordConfirm },
//             'password'
//         );

//         document.querySelector('.btn--save-password').textContent =
//             'Save password';
//         document.getElementById('password-current').value = '';
//         document.getElementById('password').value = '';
//         document.getElementById('password-confirm').value = '';
//     });

// if (bookBtn)
//     bookBtn.addEventListener('click', (e) => {
//         e.target.textContent = 'Processing...';
//         const { tourId } = e.target.dataset;
//         bookTour(tourId);
//     });

// const alertMessage = document.querySelector('body').dataset.alert;
// if (alertMessage) showAlert('success', alertMessage, 20);

// // import '@babel/polyfill';
// // import { displayMap } from './mapbox';
// // import { login, logout } from './login';
// // import { updateSettings } from './updateSettings';
// // import { bookTour } from './stripe';

// // // DOM Elements
// // const mapBox = document.querySelector('#map');
// // const loginForm = document.querySelector('.form--login');
// // const logOutBtn = document.querySelector('.nav__el--logout');
// // const userDataForm = document.querySelector('.form-user-data');
// // const userPasswordForm = document.querySelector('.form-user-password');
// // const bookBtn = document.querySelector('#book-tour-huell');

// // function huell(bookBtn) {
// //     bookBtn.addEventListener('click', (e) => {
// //         e.target.textContent = 'Process...';
// //         const { tourId } = e.target.dataset;
// //         bookTour(tourId);
// //     });
// // }

// // // Delegation
// // if (mapBox) {
// //     const locations = JSON.parse(mapBox.dataset.locations);
// //     displayMap(locations);
// // }

// // if (logOutBtn) {
// //     logOutBtn.addEventListener('click', (e) => {
// //         e.preventDefault();
// //         logout();
// //     });
// // }

// // if (loginForm) {
// //     loginForm.addEventListener('click', (e) => {
// //         e.preventDefault();
// //         const email = document.getElementById('email').value;
// //         const password = document.getElementById('password').value;
// //         login(email, password);
// //     });
// // }

// // if (userDataForm)
// //     userDataForm.addEventListener('submit', (e) => {
// //         e.preventDefault();
// //         const name = document.querySelector('#name').value;
// //         const email = document.querySelector('#email').value;
// //         updateData({ name, email }, 'data');
// //     });

// // if (userPasswordForm)
// //     userPasswordForm.addEventListener('submit', async (e) => {
// //         e.preventDefault();
// //         document.querySelector('.btn--save-password').textContent =
// //             'Updating...';
// //         const passwordCurrent = document.querySelector('#password-current')
// //             .value;
// //         const password = document.querySelector('#password').value;
// //         const passwordConfirm = document.querySelector('#password-confirm')
// //             .value;
// //         await updateSettings(
// //             { passwordCurrent, password, passwordConfirm },
// //             'password'
// //         );
// //         document.querySelector('.btn--save-password').textContent =
// //             'Save password';
// //         document.querySelector('#password-current').textContent = '';
// //         document.querySelector('#password').textContent = '';
// //         document.querySelector('#password-confirm').textContent = '';
// //     });
