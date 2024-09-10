let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container_password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#_*0123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass)

    containerPassword.classList.remove("hide");

    password.innerHTML = pass;
    novaSenha = pass;
}
    button.addEventListener('click', (event) => {
        generatePassword();
    })


    function copyPassword(){
        navigator.clipboard.writeText(novaSenha);
    }

    password.addEventListener('click', (event) => {
        copyPassword()
        alert("Senha copiada com sucesso! 🎉")
    })














