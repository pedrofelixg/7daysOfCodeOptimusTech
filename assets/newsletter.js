const BOTAO = document.getElementById("newsletter");

function assinarNewsletter() {
    const email = document.getElementById("emailsub");
    const emailValue = email.value;

    const objEmail = {
        idEmail: emailValue
    }

    const regex = RegExp(/\S+@\S+\.\S+/);

    if(regex.test(emailValue)) {
        alert("Cadastro Confirmado");
        JSON.stringify(objEmail, null, 4);
    } else {
        alert("Cadastro não confirmado, verifique seu e-mail");
    }

    /*
    Vou tentar gerar um código que guarde os valores corretos em logs de JSON.
    */
}

BOTAO.addEventListener("click", assinarNewsletter);