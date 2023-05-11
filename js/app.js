// simulador de envios de mail
document.addEventListener('DOMContentLoaded', function() {

    // seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

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
        // de esta manera accedemos al dato del input
        // console.log(e.target.value);
        // parentElement selecciona el elemento padre
        // nextElementSibling indica al hermano del padre

        // con esta condicion verificamos si el campo esta vacio o no
        if(e.target.value.trim() === ''){
            // de esta forma haces mas dinamico el text
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        } else ;
    }

    function mostrarAlerta(mensaje, referencia) {
        // comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }



        // generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        // agregar clases a la alerta
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // inyectar el error al formulario
        // append child agrega un hijo al padre, lo agrega al final siempre
        // agregando como parametro la referencia lo agrega al final de cada input al mensaje
        referencia.appendChild(error);

    }

});