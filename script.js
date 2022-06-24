const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

password.addEventListener('input', checkPasswords);
confirmPassword.addEventListener('input', checkPasswords);


function checkPasswords(){
  if (password.value === confirmPassword.value){
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }else{
    password.classList.add('error');
    confirmPassword.classList.add('error');
  }
}