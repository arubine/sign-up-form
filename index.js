const passwordInput = document.querySelector('#password')
const confPasswordInput = document.querySelector(
  '#password-confirm'
)

function checkPasswords() {
  if (passwordInput.value !== confPasswordInput.value) {
    passwordInput.classList.add('error')
    confPasswordInput.classList.add('error')
  } else {
    passwordInput.classList.remove('error')
    confPasswordInput.classList.remove('error')
  }
}

passwordInput.addEventListener('change', checkPasswords)
confPasswordInput.addEventListener('change', checkPasswords)
