const BOTAO = document.getElementById("newsletter");

function assinarNewsletter() {
    const email = document.getElementById("emailsub");
    const emailValue = email.value;

    if(emailValue.includes('@')) {
        alert("Cadastro Confirmado");
    } else {
        alert("Cadastro não confirmado, verifique seu e-mail");
    }

    /*
    nota importante desse código: o verificador de e-mail aqui é uma gambiarra para
    manter o comportamento que eu espero quando implementar a RegEx corretamente.
    Vou tentar gerar um código que guarde os valores corretos em logs de JSON.
    */
}

BOTAO.addEventListener("click", assinarNewsletter);