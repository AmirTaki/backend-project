<?php 
    require_once "../functions/helprs.php";
    require_once "../functions/pdo_connection.php";
    // REGISTER
    if (
        isset($_POST["usernameRegister"]) and $_POST['usernameRegister'] !== "" and (preg_match("/^[A-Za-z]*\s{1}[A-Za-z]*$/",$_POST['usernameRegister'])) &&
        isset($_POST['emailRegister']) and $_POST['emailRegister'] !== "" and (preg_grep("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/", $_POST['emailRegister'])) &&
        isset($_POST['passwordRegister']) and $_POST['passwordRegister'] !== "" and (preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/",$, $_POST['passwordRegister'])) &&
        isset($_POST['password-confirmRegister']) and $_POST['password-confirmRegister'] !== "" and (preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/",$, $_POST['password-confirmRegister'])) 
    )
    if ($_POST['passwordRegister'] === $_POST['password-confirmRegister']){
        createUserTable("adidas")
        if(readTable ("adidas", "SELECT * FROM adidas.users WHERE email = ?", $single = true, $execute = [$_POST['emailRegister']])){
            redirect("auth/register.php?value=11");
        }
        else {

        }

    }
    else {
        redirect("");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register & Login</title>
    <link rel="stylesheet" href="../src/styles/auth.css">
</head>
<body>
        <div class = "containerRigester">
        <div class = "loginLabel">Login</div>
        <form action="<?= url("auth/register.php?value=") ?>" method = "post">
            <div class = "Signlabel">
                <label>SING UP</label>
            </div>
            <div class = "lableInputContainer">
                <label for="usernameRegister">USERNAME</label>
                <input type="text" id = "usernameRegister" placeholder="Enter the name family ?" name = "usernameRegister" >
                <span>❌</span>
                <span>✅</span>
            </div>
            <div class = "lableInputContainer">
                <label for="emailRegister">EMAIL</label>
                <input type="email" id = "emailRegister" placeholder="Enter the Email ? " name = "emailRegister">
                <span>❌</span>
                <span>✅</span>
            </div>
            <div class = "lableInputContainer">
                <label for="passwordRegister">PASSWORD</label>
                <input type="password" id = "passwordRegister" placeholder="Enter the Password?" name = "passwordRegister">
                <span>❌</span>
                <span>✅</span>
            </div>
            <div class = "lableInputContainer">
                <label for="passwordRepeatRegister">PASSWORD CONFIRM</label>
                <input type="password" id = "passwordRepeatRegister" placeholder="Enter the Password confirm?" name = "password-confirmRegister">
                <span>❌</span>
                <span>✅</span>
            </div>        
      
            <div class = "lableInputContainer ShowPasswordRegister">
                <label for="show-password">Show password</label>
                <input type="checkbox" id = "showPassword">
                <label id = "warningPassword"></label>
            </div>
            <div class = "lableInputContainer">
                <button id = 'ButtonRegister'>REGIESTER</button>
            </div>
        </form>
    </div>
    <div class = "containerLogin">
        <div class = "registerLabel">Register</div>
          <form action="">
            <div class = "Signlabel">
                <label>LOGIN</label>
            </div>
     
            <div class = "lableInputContainer">
                <label for="emailLogin">EMAIL</label>
                <input type="email" id = "emailLogin" placeholder="Enter the Email ? ">
                <span>❌</span>
                <span>✅</span>
            </div>

            <div class = "lableInputContainer">
                <label for="passwordLogin">PASSWORD </label>
                <input type="password" id = "passwordLogin" placeholder="Enter the Password confirm?">
                <span>❌</span>
                <span>✅</span>
            </div>      
            
            <div class = "lableInputContainer ShowPasswordLogin">
                <label for="show-password">Show password</label>
                <input type="checkbox" id = "show-password-login">
            </div>  
     
            <div class = "lableInputContainer ButtonLogin">
                <button id = "ButtonLogin">LOGIN</button>
            </div>
        </form>
    </div>
    <script src = "../src/script/auth.js"></script>
</body>
</html>