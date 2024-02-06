function MostraSenha() {
    const input = document.querySelector(".in2")
    const senha = document.querySelector("#bnt-senha")

    if (input.type === "password") {
        input.setAttribute("type", "text")
        senha.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
    }

    else {
        input.setAttribute("type", "password")
        senha.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
    }
}

function Enviar() {
    const in1 = document.querySelector(".in1").value
    const input = document.querySelector(".in2").value

    console.log(in1, input)
}



