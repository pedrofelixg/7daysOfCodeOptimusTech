const botaoLogin = document.getElementById("btn__login");

function validadorEmail(){

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const regex = RegExp(/\S+@\S+\.\S+/);

    if(regex.test(email) & senha.length >= 8) {
        alert("Login Conectado");
    } else {
        alert("Erro no processamento da requisição");
        textErrorLogin();
    }
}

function textErrorLogin() {
    const mensagem = document.getElementById("mensagem__error");
    mensagem.innerHTML("Usuário ou Senha Incorreta");

    const error = "LoginError__mensagem"

    if(!mensagem.classList.contains(error)){
        mensagem.classList.add(error);
        return
    }
}

botaoLogin.addEventListener("click", validadorEmail)

/*

obviamente, essa não é a melhor maneira de fazer uma verificação de login ou senha
falta mais cadeados de segurança, a ideia apenas é fazer com que o comportamento
fique similar (o que é um exagero) à casos reais.

*/