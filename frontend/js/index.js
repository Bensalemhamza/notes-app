



// document.addEventListener('DOMContentLoaded', function() {
    
//     // Login page validation
//     if (window.location.pathname === '/login.html') {
//         const loginForm = document.getElementById('loginForm');
// const loginEmailInput = document.getElementById('loginEmail');
// const loginPasswordInput = document.getElementById('loginPassword');

// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     clearAllErrors();
    
//     let formHasError = false;

//     if (!validateInput(loginEmailInput, loginEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//         formHasError = true;
//     }

//     if (!validateInput(loginPasswordInput, loginPasswordInput.value.trim(), (val) => val.length >= 8, 'Password is required.', 'Password must be at least 8 characters.')) {
//         formHasError = true;
//     }

//     if (!formHasError) {
//         loginForm.submit();
//     }
// });
//     } 


// // Sign-Up page validation
// if (window.location.pathname === '/signup.html') {
//     const signUpForm = document.getElementById('signUpForm');
// const signUpFullNameInput = document.getElementById('signUpFullName');
// const signUpEmailInput = document.getElementById('signUpEmail');
// const signUpPasswordInput = document.getElementById('signUpPassword');
// const signUpConfirmPasswordInput = document.getElementById('signUpConfirmPassword');


// signUpForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     clearAllErrors();
//     console.log("wwwwww")
//     let formHasError = false;

//     if (!validateInput(signUpFullNameInput, signUpFullNameInput.value.trim(), (val) => val !== '', 'Full name is required.', '')) {
//         formHasError = true;
//     }

//     if (!validateInput(signUpEmailInput, signUpEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//         formHasError = true;
//     }

//     if (!validateInput(signUpPasswordInput, signUpPasswordInput.value.trim(), (val) => val.length >= 8, 'Password is required.', 'Password must be at least 8 characters.')) {
//         formHasError = true;
//     }

//     if (!validateInput(signUpConfirmPasswordInput, signUpConfirmPasswordInput.value.trim(), (val) => val === signUpPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
//         formHasError = true;
//     }

//     if (!formHasError) {
//         signUpForm.submit();
//     }
// });
// }


// // Forgot Password page validation
// if (window.location.pathname === '/forget.html') {
//     const forgotPasswordForm = document.getElementById('forgotPasswordForm');
// const forgotPasswordEmailInput = document.getElementById('forgotPasswordEmail');


// forgotPasswordForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     clearAllErrors();

//     if (validateInput(forgotPasswordEmailInput, forgotPasswordEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//         forgotPasswordForm.submit();
//     }
// });
// }



// // Reset Password page validation
// if (window.location.pathname === '/reset.html') {
//     const resetPasswordForm = document.getElementById('resetPasswordForm');
// const resetPasswordInput = document.getElementById('resetPassword');
// const resetConfirmPasswordInput = document.getElementById('resetConfirmPassword');


// resetPasswordForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     clearAllErrors();

//     let formHasError = false;

//     if (!validateInput(resetPasswordInput, resetPasswordInput.value.trim(), (val) => val.length >= 8, 'Password is required.', 'Password must be at least 8 characters.')) {
//         formHasError = true;
//     }

//     if (!validateInput(resetConfirmPasswordInput, resetConfirmPasswordInput.value.trim(), (val) => val === resetPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
//         formHasError = true;
//     }

//     if (!formHasError) {
//         resetPasswordForm.submit();
//     }
// });
// }



// // Helper Functions
// function isValidEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }

// function validateInput(inputElement, value, validationFn, emptyMessage, invalidMessage) {
//     if (value === '') {
//         addErrorMessage(inputElement, emptyMessage);
//         return false;
//     } else if (!validationFn(value)) {
//         addErrorMessage(inputElement, invalidMessage);
//         return false;
//     } else {
//         clearError(inputElement);
//         return true;
//     }
// }

// function addErrorMessage(inputElement, message) {
//     const parentDiv = inputElement.parentElement;
//     const error = document.createElement('p');
//     error.textContent = message;
//     error.classList.add('text-red-500', 'text-[12px]', 'mt-[2px]', 'font-bold');
//     parentDiv.appendChild(error);
//     inputElement.classList.add('border-red-500');
// }

// function clearError(inputElement) {
//     const parentDiv = inputElement.parentElement;
//     const error = parentDiv.querySelector('p.text-red-500');
//     if (error) error.remove();
//     inputElement.classList.remove('border-red-500');
// }

// function clearAllErrors() {
//     document.querySelectorAll('p.text-red-500').forEach(el => el.remove());
//     document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));
// }
    
// });






// // Login page validation
// const loginForm = document.getElementById('loginForm');
// if (loginForm) {
//     const loginEmailInput = document.getElementById('loginEmail');
//     const loginPasswordInput = document.getElementById('loginPassword');

//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         let formHasError = false;

//         if (!validateInput(loginEmailInput, loginEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//             formHasError = true;
//         }

//         if (!validateInput(loginPasswordInput, loginPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
//             formHasError = true;
//         }

//         if (!formHasError) {
//             loginForm.submit();
//         }
//     });
// }

// // Sign-Up page validation
// const signUpForm = document.getElementById('signUpForm');
// if (signUpForm) {
//     const signUpFullNameInput = document.getElementById('signUpFullName');
//     const signUpEmailInput = document.getElementById('signUpEmail');
//     const signUpPasswordInput = document.getElementById('signUpPassword');
//     const signUpConfirmPasswordInput = document.getElementById('signUpConfirmPassword');

//     signUpForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         let formHasError = false;

//         if (!validateInput(signUpFullNameInput, signUpFullNameInput.value.trim(), (val) => val !== '', 'Full name is required.', '')) {
//             formHasError = true;
//         }

//         if (!validateInput(signUpEmailInput, signUpEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//             formHasError = true;
//         }

//         if (!validateInput(signUpPasswordInput, signUpPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
//             formHasError = true;
//         }

//         if (!validateInput(signUpConfirmPasswordInput, signUpConfirmPasswordInput.value.trim(), (val) => val === signUpPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
//             formHasError = true;
//         }

//         if (!formHasError) {
//             signUpForm.submit();
//         }
//     });
// }

// // Forgot Password page validation
// const forgotPasswordForm = document.getElementById('forgotPasswordForm');
// if (forgotPasswordForm) {
//     const forgotPasswordEmailInput = document.getElementById('forgotPasswordEmail');

//     forgotPasswordForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         if (validateInput(forgotPasswordEmailInput, forgotPasswordEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//             forgotPasswordForm.submit();
//         }
//     });
// }

// // Reset Password page validation
// const resetPasswordForm = document.getElementById('resetPasswordForm');
// if (resetPasswordForm) {
//     const resetPasswordInput = document.getElementById('resetPassword');
//     const resetConfirmPasswordInput = document.getElementById('resetConfirmPassword');

//     resetPasswordForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         let formHasError = false;

//         if (!validateInput(resetPasswordInput, resetPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
//             formHasError = true;
//         }

//         if (!validateInput(resetConfirmPasswordInput, resetConfirmPasswordInput.value.trim(), (val) => val === resetPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
//             formHasError = true;
//         }

//         if (!formHasError) {
//             resetPasswordForm.submit();
//         }
//     });
// }


// function isValidEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }

// function validateInput(inputElement, value, validationFn, emptyMessage, invalidMessage) {
//     if (value === '') {
//         addErrorMessage(inputElement, emptyMessage);
//         return false;
//     } else if (!validationFn(value)) {
//         addErrorMessage(inputElement, invalidMessage);
//         return false;
//     } else {
//         clearError(inputElement);
//         return true;
//     }
// }

// function addErrorMessage(inputElement, message) {
//     const parentDiv = inputElement.parentElement;
//     const error = document.createElement('p');
//     error.textContent = message;
//     error.classList.add('text-red-500', 'text-[12px]', 'mt-[2px]', 'font-bold');
//     parentDiv.appendChild(error);
//     inputElement.classList.add('border-red-500');
// }

// function clearError(inputElement) {
//     const parentDiv = inputElement.parentElement;
//     const error = parentDiv.querySelector('p.text-red-500');
//     if (error) error.remove();
//     inputElement.classList.remove('border-red-500');
// }

// function clearAllErrors() {
//     document.querySelectorAll('p.text-red-500').forEach(el => el.remove());
//     document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));
// }



// const BASE_URL = 'http://localhost:4000/api/auth'; // Change to your backend URL

// // Utility function to display errors
// function displayError(elementId, message) {
//     const errorDiv = document.getElementById(elementId);
//     errorDiv.textContent = message;
// }

// // **1. Login Form Submission**
// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log("fffffffffff")
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     try {
//         const response = await fetch(`http://localhost:4000/api/auth/login`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         });
//         console.log(response)
//         console.log("bbbbbbbbbbbbbbbbbb")
        
//         const result = await response.json();
//         console.log(result)
//         if (response.ok) {
//             alert('Login successful!');
//             localStorage.setItem('token', result.token);
//             console.log(result.token); // Handle the token (e.g., store in localStorage)
//             window.location.href = '/dashboard.html';
//         } else {
//             displayError('loginError', result.message || 'Login failed.');
//             console.log("rrrrrrrrrrrrrrrr")
//         }
//     } catch (error) {
//         displayError('loginError', 'An error occurred.');
//         console.log("sssssssssssss")
//     }
// });

// // **2. Signup Form Submission**
// document.getElementById('signUpForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const name = document.getElementById('signUpFullName').value.trim();
//     const fullNameParts = name.split(' '); // Split the name into parts
//     const firstName = fullNameParts[0]; // First part is the first name
//     const lastName = fullNameParts.slice(1).join(' '); // Join the rest as the last name
//     const email = document.getElementById('signUpEmail').value.trim();
//     const password = document.getElementById('signUpPassword').value.trim();
//     console.log("1")
//     try {
//         const response = await fetch(`${BASE_URL}/signup`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password }),
//         });
//         console.log("2")
//         const result = await response.json();
//         if (response.ok) {
//             alert('Signup successful!');
//             // Optionally redirect or reset the form
//             window.location.href = '/login.html'; // Redirect to login page
//             console.log("3")
//         } else {
//             displayError('signupError', result.message || 'Signup failed.');
//             console.log("4")
//         }
//     } catch (error) {
//         displayError('signupError', 'An error occurred.');
//         console.log("5")
//     }
// });

// // **3. Forgot Password Form Submission**
// document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const email = document.getElementById('forgotEmail').value.trim();

//     try {
//         const response = await fetch(`${BASE_URL}/forgot-password`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email }),
//         });

//         const result = await response.json();
//         if (response.ok) {
//             alert('Reset link sent to your email!');
//         } else {
//             displayError('forgotError', result.message || 'Failed to send reset link.');
//         }
//     } catch (error) {
//         displayError('forgotError', 'An error occurred.');
//     }
// });

// // **4. Reset Password Form Submission**
// document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const token = prompt('Enter your reset token:'); // Collect the token (usually from URL or email)
//     const newPassword = document.getElementById('resetPassword').value.trim();
//     const confirmPassword = document.getElementById('resetConfirmPassword').value.trim();

//     if (newPassword !== confirmPassword) {
//         displayError('resetError', 'Passwords do not match.');
//         return;
//     }

//     try {
//         const response = await fetch(`${BASE_URL}/reset-password`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ token, newPassword }),
//         });

//         const result = await response.json();
//         if (response.ok) {
//             alert('Password reset successful!');
//         } else {
//             displayError('resetError', result.message || 'Password reset failed.');
//         }
//     } catch (error) {
//         displayError('resetError', 'An error occurred.');
//     }
// });






// Constants
const BASE_URL = 'http://localhost:4000/api/auth';

// Utility Functions
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateInput(inputElement, value, validationFn, emptyMessage, invalidMessage) {
    if (value === '') {
        addErrorMessage(inputElement, emptyMessage);
        return false;
    } else if (!validationFn(value)) {
        addErrorMessage(inputElement, invalidMessage);
        return false;
    } else {
        clearError(inputElement);
        return true;
    }
}

function addErrorMessage(inputElement, message) {
    const parentDiv = inputElement.parentElement;
    const error = document.createElement('p');
    error.textContent = message;
    error.classList.add('text-red-500', 'text-[12px]', 'mt-[2px]', 'font-bold');
    parentDiv.appendChild(error);
    inputElement.classList.add('border-red-500');
}

function clearError(inputElement) {
    const parentDiv = inputElement.parentElement;
    const error = parentDiv.querySelector('p.text-red-500');
    if (error) error.remove();
    inputElement.classList.remove('border-red-500');
}

function clearAllErrors() {
    document.querySelectorAll('p.text-red-500').forEach(el => el.remove());
    document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));
}

function displayError(elementId, message) {
    const errorDiv = document.getElementById(elementId);
    if (errorDiv) {
        errorDiv.textContent = message;
    }
}

// Login Form Validation and Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearAllErrors();

        let formHasError = false;

        if (!validateInput(loginEmailInput, loginEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
            formHasError = true;
        }

        if (!validateInput(loginPasswordInput, loginPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
            formHasError = true;
        }

        if (!formHasError) {
            try {
                const response = await fetch(`${BASE_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: loginEmailInput.value.trim(),
                        password: loginPasswordInput.value.trim()
                    }),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Login successful!');
                    localStorage.setItem('token', result.token);
                    window.location.href = '/dashboard.html';
                } else {
                    displayError('loginError', result.message || 'Login failed.');
                }
            } catch (error) {
                displayError('loginError', 'An error occurred. Please try again later.');
            }
        }
    });
}

// Sign-Up Form Validation and Submission
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    const signUpFullNameInput = document.getElementById('signUpFullName');
    const signUpEmailInput = document.getElementById('signUpEmail');
    const signUpPasswordInput = document.getElementById('signUpPassword');
    const signUpConfirmPasswordInput = document.getElementById('signUpConfirmPassword');

    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearAllErrors();

        let formHasError = false;

        if (!validateInput(signUpFullNameInput, signUpFullNameInput.value.trim(), (val) => val !== '', 'Full name is required.', '')) {
            formHasError = true;
        }

        if (!validateInput(signUpEmailInput, signUpEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
            formHasError = true;
        }

        if (!validateInput(signUpPasswordInput, signUpPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
            formHasError = true;
        }

        if (!validateInput(signUpConfirmPasswordInput, signUpConfirmPasswordInput.value.trim(), (val) => val === signUpPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
            formHasError = true;
        }

        if (!formHasError) {
            try {
                const fullNameParts = signUpFullNameInput.value.trim().split(' ');
                const firstName = fullNameParts[0];
                const lastName = fullNameParts.slice(1).join(' ');

                const response = await fetch(`${BASE_URL}/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        firstname: firstName,
                        lastname: lastName,
                        email: signUpEmailInput.value.trim(),
                        password: signUpPasswordInput.value.trim()
                    }),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Signup successful!');
                    window.location.href = '/login.html';
                } else {
                    displayError('signupError', result.message || 'Signup failed.');
                }
            } catch (error) {
                displayError('signupError', 'An error occurred. Please try again later.');
            }
        }
    });
}

// Forgot Password Form Validation and Submission
// const forgotPasswordForm = document.getElementById('forgotPasswordForm');
// if (forgotPasswordForm) {
//     const forgotPasswordEmailInput = document.getElementById('forgotPasswordEmail');

//     forgotPasswordForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         if (validateInput(forgotPasswordEmailInput, forgotPasswordEmailInput.value.trim(), isValidEmail, 'Email is required.', 'Please enter a valid email address.')) {
//             try {
//                 const response = await fetch(`${BASE_URL}/forgot-password`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ email: forgotPasswordEmailInput.value.trim() }),
//                 });

//                 const result = await response.json();
//                 if (response.ok) {
//                     alert('Reset link sent to your email!');
//                 } else {
//                     displayError('forgotError', result.message || 'Failed to send reset link.');
//                 }
//             } catch (error) {
//                 displayError('forgotError', 'An error occurred. Please try again later.');
//             }
//         }
//     });
// }

// Reset Password Form Validation and Submission
// const resetPasswordForm = document.getElementById('resetPasswordForm');
// if (resetPasswordForm) {
//     const resetPasswordInput = document.getElementById('resetPassword');
//     const resetConfirmPasswordInput = document.getElementById('resetConfirmPassword');

//     resetPasswordForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         clearAllErrors();

//         let formHasError = false;

//         if (!validateInput(resetPasswordInput, resetPasswordInput.value.trim(), (val) => val.length >= 6, 'Password is required.', 'Password must be at least 6 characters.')) {
//             formHasError = true;
//         }

//         if (!validateInput(resetConfirmPasswordInput, resetConfirmPasswordInput.value.trim(), (val) => val === resetPasswordInput.value.trim(), 'Please confirm your password.', 'Passwords do not match.')) {
//             formHasError = true;
//         }

//         if (!formHasError) {
//             try {
//                 const token = prompt('Enter your reset token:'); // Collect the token (from URL or email)

//                 const response = await fetch(`${BASE_URL}/reset-password`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         token,
//                         newPassword: resetPasswordInput.value.trim()
//                     }),
//                 });

//                 const result = await response.json();
//                 if (response.ok) {
//                     alert('Password reset successful!');
//                 } else {
//                     displayError('resetError', result.message || 'Password reset failed.');
//                 }
//             } catch (error) {
//                 displayError('resetError', 'An error occurred. Please try again later.');
//             }
//         }
//     });
// }
