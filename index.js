//SIGN UP
//grab the form data

function signup(event){
    event.preventDefault()
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    //Check if the passwords match
    if(password.value !== confirmPassword.value){
        alert(`passwords do not match`)
        return
    }
    //Collecting data from the form
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem('userData', JSON.stringify(user));
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    alert(`You successfully signed up!`);
    //Redirect to the signin page
    window.location.href = '/signin.html'

}

//Sign Up form
function signin(event){
    event.preventDefault();
    let signEmail = document.getElementById('sign-email') 
    let signPassword = document.getElementById('sign-password') 
    
    //Retrieve user credentials from local storage
    let user = localStorage.getItem('userData')
    user = JSON.parse(user);
    if(user.password !== signPassword.value){
        alert(`Incorrect email or password!`);
        return;
    }

    alert(`Signin successful!!!`)
    signEmail.value = '';
    signPassword.value = '';
}