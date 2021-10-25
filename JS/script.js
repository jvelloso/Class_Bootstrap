document.getElementById("Salvar").addEventListener("click", validaFormulario)

function validaFormulario(){

    if (document.getElementById("textnome").value != "" && 
    document.getElementById("selectCidade").value != "" &&
    document.getElementById("textemail").value != "" &&
    document.getElementById("textwpp").value != "" &&
    document.getElementById("textpqqueradotar").value != "")
    {
        alert("Cadastro realizado com sucesso! Aguarde nosso contato")
    } 

    else {
        alert("Por favor, preencha todos os campos")
    }
}

