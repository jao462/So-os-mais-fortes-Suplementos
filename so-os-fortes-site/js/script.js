
document.addEventListener("DOMContentLoaded",()=>{
 const botoes=document.querySelectorAll(".detalhes");
 botoes.forEach(btn=>{
   btn.addEventListener("click",()=>{
      const info=btn.nextElementSibling;
      if(info&&info.classList.contains("detalhes-info")){
        info.classList.toggle("ativo");
        return;
      }
      alert(btn.dataset.produto);
   });
 });

 const form=document.getElementById("contatoForm");
 if(form){
   form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const nome=document.getElementById("nome").value.trim();
      const email=document.getElementById("email").value.trim();
      const msg=document.getElementById("mensagem").value.trim();

      if(nome===""||email===""||msg===""){
        alert("Preencha todos os campos.");
        return;
      }

      const emailValido=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailValido.test(email)){
        alert("Digite um e-mail válido.");
        return;
      }

      document.getElementById("mensagemSucesso").textContent =
      "Mensagem enviada com sucesso! Dados enviados para o banco (simulado).";

      form.reset();
   });
 }
});
