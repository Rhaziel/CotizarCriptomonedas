//leer el formulario

const formulario = document.getElementById('#formulario');
//eventlistener
formulario.addEventListener('submit', (e)=>{
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
     }else{
          //todo bien, consultar la api
     }
     
})