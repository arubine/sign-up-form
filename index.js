const passwordInput = document.querySelector('#password')
const confPasswordInput = document.querySelector(
  '#password-confirm'
)

const pwdDiv = document.querySelector('.pwd')
const confPwdDiv = document.querySelector('.conf-pwd')

function checkPasswords() {
  if (passwordInput.value !== confPasswordInput.value) {
    pwdDiv.classList.add('error')
    confPwdDiv.classList.add('error')
  } else {
    pwdDiv.classList.remove('error')
    confPwdDiv.classList.remove('error')
  }
}

passwordInput.addEventListener('change', checkPasswords)
confPasswordInput.addEventListener('change', checkPasswords)
