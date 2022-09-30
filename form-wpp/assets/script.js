document.querySelector('#enviar').addEventListener('click',function(){
    let chck = document.querySelector('#algo').value;
    let cliente = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let contato = document.querySelector('#contato').value;
    
   let url = ("https://api.whatsapp.com/send?phone=seunumero&text= Bem vindo(a) %0A Nome: " + cliente + " %0A E-mail: " + 
   email + "%0A Contato: "+ contato + "%0A Checkbox Ativa: " + chck);
   
   window.open(url);
   
   });