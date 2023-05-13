// domcontentloaded carga el dom
// simulador de envios de mail
document.addEventListener('DOMContentLoaded', function() {

    // creando un objeto para verificar que los campos esten llenos
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')

    // asignar eventos
    // blur se ejecuta cuando abandonas un campo
    // input se ejecuta cada vez que se escribe dentro del campo
    inputEmail.addEventListener('input', function(e) {

        // de esta forma podemos acceder al valor dentro del input
      console.log(e.target.value);
    });

    // de esta forma podemos escribir codigo reutilizable 
    // input lo que hace es que todo se ejecute en tiempo real
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    function validar(e) {
        // de esta manera accedemos al dato del input
        // console.log(e.target.value);
        // parentElement selecciona el elemento padre
        // nextElementSibling indica al hermano del padre

        // con esta condicion verificamos si el campo esta vacio o no
        if(e.target.value.trim() === ''){
            // de esta forma haces mas dinamico el text
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return; // este return detiene la ejecucion del codigo
        } 

        // de esta forma mostrar alerta solo se ejecuta si el id es igual a email y la funcion validarEmail falla
        if (e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('el mail no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
        }

        // esta funcion limpia la alerta cuando se completan los campos
        limpiarAlerta(e.target.parentElement);

        // asignar valores al objeto
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // comprobar email mediante funcion
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

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

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {

        // object.values lo que hace es retornar un array con los valores de cada parametro del objeto 
        // si pusieramos .keys devolveria los parametros, solamente el nombre
       if (Object.values(email).includes('')){
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disabled = true;
       } else {
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
       };
    }
});