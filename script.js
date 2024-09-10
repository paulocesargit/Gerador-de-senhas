let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container_password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#_*0123456789"
let novaSenha = "";
//mostrar o número de caracteres
sizePassword.innerHTML = sliderElement.value;
//mostrar o número de caracteres de acordo com o range
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
//função (enquanto o i for menor que o sliderElement adicione um caractere aleatório)
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass)
    //removendo a classe que oculta 
    containerPassword.classList.remove("hide");
    //mostrando a senha
    password.innerHTML = pass;
    novaSenha = pass;
}
    //pegando o botão no html e adicionando evento de click
    button.addEventListener('click', (event) => {
        generatePassword();
    })

    //criando função que copia a senha e avisa
    function copyPassword(){
        navigator.clipboard.writeText(novaSenha);
    }

    //pegando o botão no html e adicionando evento de click 
    password.addEventListener('click', (event) => {
        copyPassword()
        alert("Senha copiada com sucesso! 🎉")
    })














