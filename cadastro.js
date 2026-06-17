const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btn = document.querySelector('.btn')



btn.addEventListener('click',function (event){
event.preventDefault(btn);
if (email.value.trim() === "" || senha.value.trim() === "") {
    alert("Preencha os campos");
    return;

}

window.location.href = "cadastro.html";


});