try {
  var suma = 0;
  var contador = 0;

  x = prompt('Ingrese el numero "x"');
  y = prompt('Ingrese el numero "y"');
  z = prompt('Ingrese el numero "z"');

  if (!isNaN(x)) {
    suma += Number(x);
    contador ++;
  } else {
    console.log("'x' no es un numero");
  }
  
  if (!isNaN(y)) {
    suma += Number(y);
    contador ++;
  } else {
    console.log("'y' no es un numero");
  }
  
  if (!isNaN(z)) {
    suma += Number(z);
    contador ++;
  } else {
    console.log("'z' no es un numero");
  }
} catch (err) {
  alert("Hay un error" + err.name);
} finally {
  document.write('El promedio de los numeros ingresados es: ' + suma/contador);
  console.log('El promedio de los numeros ingresados es: ' + suma/contador);
}
