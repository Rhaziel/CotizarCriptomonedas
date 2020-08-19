const cotizador = new API('6d185f58d7579577335ef21248e108e00e021f186f97b4ec93bbb60bda90c238');



const ui = new Interfaz();



//leer el formulario

const formulario = document.querySelector('#formulario');
//eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     //leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     //leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

     //comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
          //arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     }else{
          //todo bien, consultar la api
     }
     
})