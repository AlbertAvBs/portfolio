const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    window.location.href= `mailto:ztrokk.rb@gmail.com?
    subject=envioDesdeFormulario&body= Nombre${nombre}%0ACorreo${email}%0AMensaje${mensaje}`;

});


