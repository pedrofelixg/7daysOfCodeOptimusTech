const BOTAO = document.getElementById("newsletter");
const EMAIL = document.getElementById("email__sub").value;

function assinarNewsletter() {
    var regEmail = "/\S+@\S+\.\S+"; 
    //como passo isso pra regex?

    if(EMAIL == regEmail) {
        alert("Cadastro Confirmado");
    } else {
        alert("Cadastro não confirmado, verifique seu e-mail");
    }
}

BOTAO.addEventListener("click", assinarNewsletter);