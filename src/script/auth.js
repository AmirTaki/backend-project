
const loginLabel = document.querySelector(".loginLabel")
const registerLabel = document.querySelector('.registerLabel')
const containerRigester = document.querySelector(".containerRigester")
const containerLogin = document.querySelector(".containerLogin")
const usernameRegister = document.getElementById("usernameRegister")
const emailRegister = document.getElementById("emailRegister")
const passwordRegister = document.getElementById('passwordRegister')
const passwordRepeatRegister = document.getElementById('passwordRepeatRegister')
const ButtonRegister = document.getElementById('ButtonRegister')
const inputs = document.querySelectorAll('input')
const spans = document.querySelectorAll('span')
const lableInputContainer = document.querySelectorAll('.lableInputContainer')
const showPassword  = document.getElementById('showPassword')
const warningPassword = document.getElementById("warningPassword")
const vlauesInput = [null, null, null, null, null, null, null]
const emailLogin = document.getElementById("emailLogin")
const passwordLogin = document.getElementById("passwordLogin")
const ButtonLogin = document.getElementById("ButtonLogin")
const showPasswordLogin = document.getElementById("show-password-login")

// INPUT 
inputs.forEach((input, index) => {
    // KEYDOWN
    input.addEventListener('keydown', (e)=> {
        clearSapn(index)
        if(showPassword.checked === false){
            passwordRegister.type = "password"
            passwordRepeatRegister.type = "password"
        }
        if(showPasswordLogin.checked === false){
            passwordLogin.type = "password"
        }
        if (input.style.color === "red" || input.style.color === "orange"){
            input.value = vlauesInput[index]
            input.style.color = "rgb(107, 107, 107)"   
        }
    })
    // CLICK FOCUS
    input.addEventListener('click', (e)=> {
        clearSapn(index)
        if(showPassword.checked === false){
            passwordRegister.type = "password"
            passwordRepeatRegister.type = "password"
        }
        if(showPasswordLogin.checked === false){
            passwordLogin.type = "password"
        }
        if (input.style.color === "red" || input.style.color === "orange"){
            input.value = vlauesInput[index]
            input.style.color = "rgb(107, 107, 107)"   
        }
    })
});
// HIDDEN PASSWORD & SHOW PASSWORD
const showHiddenPassword = () => {
    if(showPassword.checked === true){
        passwordRegister.type = "text"
        passwordRepeatRegister.type = "text"
    }
    else {
        passwordRegister.type = "password"
        passwordRepeatRegister.type = "password"
    }
}
// HIDDEN PASSWORD & SHOW PASSWORD
showPassword.addEventListener("click", (e)=> {
    showHiddenPassword()
})
// HIDDEN & SHOW PASSWORD LOGIN  FUNCTION
const showHiddenPasswordLogin = ()  => {
    passwordLogin.type =  showPasswordLogin.checked === true ? "text" : "password"
}
// HIDDEN & SHOW PASSWORD LOGIN
showPasswordLogin.addEventListener('click', (e)=>{
    showHiddenPasswordLogin()
})        
// CLEAR SPAN CHECK & CROSS
const clearSapn = (index) => {
    let span =  lableInputContainer[index].querySelectorAll('span')
    span.forEach(element => {
        element.style.display = 'none'
    });
}
// SHOW SPAN CKECK & CROSS
const showSpan = (input, span) => {
    lableInputContainer[input].querySelectorAll("span")[span].style.display = "flex"
}
// CHECK USER NAME
const checkUserName = (username, index) => {
    const save = (message, index) => {
        if (message === "Name is requierd"){
            return vlauesInput[index]
        }
        else if(message === "Write full Name"){
            return vlauesInput[index]
        }
        else {
            return message
        }
    }
    vlauesInput[index] = save(username.value, index )
    if(username.value.length === 0){
        username.value = "Name is requierd"
        username.style.color = "red"
        showSpan(index, 0)
        return false;
    }
    else if (!username.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        username.value = "Write full Name"
        username.style.color = "red"
        showSpan(index, 0)
        return false
    }
    else {
        username.style.color = "green"
        showSpan(index, 1) 
        return true
    }
}
// CHECK EMAIL
const checkEmail = (email, index,) => {
    const save = (message, index) => {
        if (message === "Email is required"){
            return vlauesInput[index]
        }
        else if(message === "Write full Email"){
            return vlauesInput[index]
        }
        else if(message === "This email has already been registered!"){
            return vlauesInput[index]
        }
        else {
            return message
        }
    }
    vlauesInput[index] = save(email.value, index )
    if(email.value.length === 0){
        email.value = "Email is required"
        email.style.color = "red"
        showSpan(index, 0) 
        return false
    }
    else if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        email.value = "Write full Email"
        email.style.color = "red"
        showSpan(index, 0) 
        return false
    }
    else {
        email.style.color = "green"
        showSpan(index, 1) 
        return true
    }
}
// CHECK PASSWORD
const checkPassowrd = (password, index ) =>{
    const save = (message, index) => {
        if (message === "Password is required"){
            return vlauesInput[index]
        }
        else if(message === "Password should contain 1Uppercase, 1Lowecase, 1 Digit & 1Alphabet "){
            return vlauesInput[index]
        }
        else {
            return message
        }
    }
    vlauesInput[index] = save(password.value, index )
    if(password.value.length === 0){
        password.type = 'text'
        password.value = "Password is required"
        password.style.color = "red"
        showSpan(index, 0) 
        return false
    }
    else if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        password.type = 'text'
        password.value = "Password should contain 1Uppercase, 1Lowecase, 1 Digit & 1Alphabet "
        password.style.color = "red"
        showSpan(index, 0) 
        return false
    }
    else {
        password.style.color = "green"
        showSpan(index, 1) 
        return true
    }
}   
// CHECK CONFIRM PASSWORD
const checkConfirmPassword = (password, indexPassword, confirm, indexConfirm) =>{
    clearSapn(indexPassword)
    clearSapn(indexConfirm)
    if(password.value === confirm.value){
        warningPassword.innerText = ""
        showSpan(indexPassword, 1)
        showSpan(indexConfirm, 1)
        return true
    }
    else {
        warningPassword.style.color = "red"
        warningPassword.innerText = "confirm not password"
        showSpan(indexPassword, 0)
        showSpan(indexConfirm, 0)
        return false
        
    }
}
// BUTTON REGISTER
ButtonRegister.addEventListener("click", (e)=>{
    const flag =  checkUserName(usernameRegister, 0 ) && checkEmail(emailRegister, 1)  && checkPassowrd(passwordRegister, 2) &&  checkPassowrd(passwordRepeatRegister, 3) && checkConfirmPassword(passwordRegister, 2,  passwordRepeatRegister, 3)
    flag ? "" : e.preventDefault()        
})
// CHECK EMAIL lOGIN 
const checkEmailLogin = (email, index) => {
    const save = (message, index) => {
        if (message === "Email is required"){
            return vlauesInput[index]
        }
        else if(message === "Write full Email"){
            return vlauesInput[index]
        }
        else {
            return message
        }

    }
    vlauesInput[index] = save(email.value, index )
    if (email.value.length === 0){
        email.value = "Email is required"
        email.style.color = "red"
        showSpan(index + 1, 0) 
        return false
    }
    else if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        email.value = "Write full Email"
        email.style.color = "red"
        showSpan(index + 1, 0) 
        return false
    }
    else {
        email.style.color = "green"
        showSpan(index + 1, 1) 
        return true
    }
}
// CHECK PASSWORD LOGIN
const checkPasswordLogin = (password, index) => {
    vlauesInput[index] = password.value 
    if(password.value.length === 0){
        password.type = 'text'
        password.value = "Password is required"
        password.style.color = "red"
        showSpan(index + 1, 0) 
        return false
    }
    else {
        password.style.color = "green"
        showSpan(index + 1, 1) 
        return true
    }
}
// BUTTON LOGIN 
ButtonLogin.addEventListener("click", (e)=> {
    flag = checkEmailLogin(emailLogin, 5) && checkPasswordLogin(passwordLogin, 6)
    flag ? "" : e.preventDefault()

})
// LOGIN PAGE ANIMATION
loginLabel.addEventListener("click", (e)=> {
    containerRigester.style.animation = "containerRigesterDown 1s linear forwards"
    setTimeout(() => {
        containerRigester.style.display = "none"
    }, 1000);
    containerLogin.style.display = 'flex'
    containerLogin.style.animation = "containerRigesterUp 1s linear forwards"
})
// SING UP PAGE ANIMATION
registerLabel.addEventListener("click", (e)=> {
    containerLogin.style.animation = "containerRigesterDown 1s linear forwards"
    setTimeout(() => {
        containerLogin.style.display = "none"
    }, 1000);
    containerRigester.style.display = 'flex'
    containerRigester.style.animation = "containerRigesterUp 1s linear forwards"
})
