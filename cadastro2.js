

document.getElementById("btnvoltar").addEventListener("click", () => {
    window.location.href = "index.html";

});

function conferirSenhas() {

    const senha = document.querySelector('#senha');
    const confirmar = document.querySelector('#confirmar');
    
    
    if (senha.value !== confirmar.value) {
      mensagemErro.style.display = "block";
      confirmaSenha.setCustomValidity("As senhas não conferem!");
    } else {
      mensagemErro.style.display = "none";
      confirmar.setCustomValidity(""); 
    }
}