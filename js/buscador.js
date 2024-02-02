// function compararCedula() {
// // Obtener el valor ingresado en el input con class "cedula"
// 	var inputCedula = document.querySelector('.cedula').value;
// 	var inputApellido = document.querySelector('.apellido').value;
//     // Restablecer resultados anteriores
//     var resultadosAnteriores = document.querySelectorAll('.persona.encontrado');
//     resultadosAnteriores.forEach(function(result) {
//     	result.classList.remove('encontrado');
//     });

//     // Obtener todos los elementos con class "cedula-estudiante"
//     var cedulasEstudiantes = document.querySelectorAll('.cedula-estudiante');
//     var apellidosEstudiantes = document.querySelectorAll('.apellido-estudiante')

//     // Iterar sobre los elementos y comparar los valores
//     for (var i = 0; i < cedulasEstudiantes.length; i++) {
//     	for (var i = 0; i < apellidosEstudiantes.length; i++){

// 	    	var cedulaEstudiante = cedulasEstudiantes[i].textContent;
// 	    	var apellidoEstudiante = apellidosEstudiantes[i].textContent;
// 	    	var persona = cedulasEstudiantes[i].closest('.persona');

// 	    	if (inputCedula === cedulaEstudiante || inputApellido === apellidoEstudiante) {
// 	        // Agregar la clase "encontrado" al div con class "persona"
// 	    		persona.classList.add('encontrado');
// 	    		console.log('El resultado es el mismo. Clase "encontrado" agregada.');
// 	    		return; // Salir del bucle si se encuentra una coincidencia
// 	    	}

//     	}
//     }

//     // Si llega aquí, no se encontró ninguna coincidencia
//     console.log('Los datos son diferentes.');
// }



// function compararDatos() {
//       // Obtener el valor ingresado en el input con class "cedula"
//       var inputCedula = document.querySelector('.cedula').value;

//       // Obtener el valor ingresado en el input con class "apellido"
//       var inputApellido = document.querySelector('.apellido').value;

//       // Obtener todos los elementos con class "cedula-estudiante"
//       var cedulasEstudiantes = document.querySelectorAll('.cedula-estudiante');

//       // Obtener todos los elementos con class "apellido-estudiante"
//       var apellidosEstudiantes = document.querySelectorAll('.apellido-estudiante');

//       // Iterar sobre los elementos y comparar los valores
//       for (var i = 0; i < cedulasEstudiantes.length; i++) {
//         var cedulaEstudiante = cedulasEstudiantes[i].textContent;
//         var apellidoEstudiante = apellidosEstudiantes[i].textContent;
//         var persona = cedulasEstudiantes[i].closest('.persona');

//         if ((inputCedula === cedulaEstudiante) || (inputApellido === apellidoEstudiante)) {
//           // Agregar la clase "encontrado" al div con class "persona"
//           persona.classList.add('encontrado');
//           console.log('El resultado es el mismo. Clase "encontrado" agregada.');
//           return; // Salir del bucle si se encuentra una coincidencia
//         }
//       }

//       // Si llega aquí, no se encontró ninguna coincidencia
//       console.log('Los datos son diferentes.');
//     }

//     // Función para habilitar/deshabilitar el input según la selección del usuario
//     document.querySelector('.cedula').addEventListener('input', function() {
//       document.querySelector('.apellido').disabled = this.value.trim() !== '';
//     });

//     document.querySelector('.apellido').addEventListener('input', function() {
//       document.querySelector('.cedula').disabled = this.value.trim() !== '';
//     });



// function compararDatos() {
//       // Obtener el valor ingresado en el input con class "cedula"
//       var inputCedula = document.querySelector('.cedula').value;

//       // Obtener el valor ingresado en el input con class "apellido" y convertirlo a minúsculas
//       var inputApellido = document.querySelector('.apellido').value.toLowerCase();

//       // Obtener todos los elementos con class "cedula-estudiante"
//       var cedulasEstudiantes = document.querySelectorAll('.cedula-estudiante');

//       // Obtener todos los elementos con class "apellido-estudiante"
//       var apellidosEstudiantes = document.querySelectorAll('.apellido-estudiante');

//       // Iterar sobre los elementos y comparar los valores
//       for (var i = 0; i < cedulasEstudiantes.length; i++) {
//         var cedulaEstudiante = cedulasEstudiantes[i].textContent;
//         var apellidoEstudiante = apellidosEstudiantes[i].textContent.toLowerCase();
//         var persona = cedulasEstudiantes[i].closest('.persona');

//         if ((inputCedula === cedulaEstudiante) || (inputApellido === apellidoEstudiante)) {
//           // Agregar la clase "encontrado" al div con class "persona"
//           persona.classList.add('encontrado');
//           console.log('El resultado es el mismo. Clase "encontrado" agregada.');
//           return; // Salir del bucle si se encuentra una coincidencia
//         }
//       }

//       // Si llega aquí, no se encontró ninguna coincidencia
//       console.log('Los datos son diferentes.');
//     }

//     // Función para habilitar/deshabilitar el input según la selección del usuario
//     document.querySelector('.cedula').addEventListener('input', function() {
//       document.querySelector('.apellido').disabled = this.value.trim() !== '';
//     });

//     document.querySelector('.apellido').addEventListener('input', function() {
//       document.querySelector('.cedula').disabled = this.value.trim() !== '';
//     });



function compararDatos() {
      // Obtener el valor ingresado en el input con class "cedula"
      var inputCedula = document.querySelector('.cedula').value;

      // Obtener el valor ingresado en el input con class "apellido" y convertirlo a minúsculas
      var inputApellido = document.querySelector('.apellido').value.toLowerCase();

      // Restablecer resultados anteriores
      var resultadosAnteriores = document.querySelectorAll('.persona.encontrado');
      resultadosAnteriores.forEach(function(result) {
        result.classList.remove('encontrado');
      });

      // Obtener todos los elementos con class "cedula-estudiante"
      var cedulasEstudiantes = document.querySelectorAll('.cedula-estudiante');

      // Obtener todos los elementos con class "apellido-estudiante"
      var apellidosEstudiantes = document.querySelectorAll('.apellido-estudiante');

      // Iterar sobre los elementos y comparar los valores
      for (var i = 0; i < cedulasEstudiantes.length; i++) {
        var cedulaEstudiante = cedulasEstudiantes[i].textContent;
        var apellidoEstudiante = apellidosEstudiantes[i].textContent.toLowerCase();
        var persona = cedulasEstudiantes[i].closest('.persona');

        if ((inputCedula === cedulaEstudiante) || (inputApellido === apellidoEstudiante)) {
          // Agregar la clase "encontrado" al div con class "persona"
          persona.classList.add('encontrado');
          console.log('El resultado es el mismo. Clase "encontrado" agregada.');
          return; // Salir del bucle si se encuentra una coincidencia
        }
      }

      // Si llega aquí, no se encontró ninguna coincidencia
      console.log('Los datos son diferentes.');
      alert('Los datos ingresados son incorrectos \n Ingrese')
    }

    // Función para habilitar/deshabilitar el input según la selección del usuario
    document.querySelector('.cedula').addEventListener('input', function() {
      document.querySelector('.apellido').disabled = this.value.trim() !== '';
    });

    document.querySelector('.apellido').addEventListener('input', function() {
      document.querySelector('.cedula').disabled = this.value.trim() !== '';
    });