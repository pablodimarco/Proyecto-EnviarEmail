// simulador de envios de mail
document.addEventListener('DOMContentLoaded', function() {

    // seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // asignar eventos
    // blur se ejecuta cuando abandonas un campo
    // input se ejecuta cada vez que se escribe dentro del campo
    inputEmail.addEventListener('blur', function(e) {

        // de esta forma podemos acceder al valor dentro del input
      console.log(e.target.value);
    });

    // de esta forma podemos escribir codigo reutilizable 
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        console.log(e.target.value);
    }

})