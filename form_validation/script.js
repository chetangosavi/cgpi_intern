
const form = document.getElementById("myform");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
   e.preventDefault();

    document.getElementById('nameError').classList.add('hidden')
    document.getElementById('emailError').classList.add('hidden')
    document.getElementById('passwordError').classList.add('hidden')

    const name = document.getElementById('name').value.trim();
    console.log(name)
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();


    let isValid = true;

    //Name validation
    if (name === '') {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    }

     // Email Validation
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!emailPattern.test(email)) {
         document.getElementById('emailError').classList.remove('hidden');
         isValid = false;
     }

    // Password Validation
    if (password.length < 6) {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    }

    // Confirm password validation
    if(confirmPassword!==password){
        document.getElementById('confirmPasswordError').classList.remove('hidden')
        isValid = false
    }


    // If all validations pass
    if (isValid) {
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        alert("Form submitted successfully!");
        form.submit(); 
    }
    else{
        submitBtn.setAttribute('disabled', true);
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});
