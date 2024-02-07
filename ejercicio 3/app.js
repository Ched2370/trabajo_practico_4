try {
  x = prompt('Ingrese el numero "x"');
  y = prompt('Ingrese el numero "y"');
  z = prompt('Ingrese el  numero "z"');
  var mayor = x;

  if (y > mayor) {
    mayor = y;
  }
  if (z > mayor) {
    mayor = z;
  }
} catch (err) {
  alert("a surgido un error " + err.name);
} finally {
  if (x === y && y === z) {
    console.log("Los 3 numeros son iguales");
    document.write("los 3 numeros son iguales <br>");
  } else {
    console.log("El numero mayor es: " + mayor);
    if (x === y && x !== z) {
      console.log('"x" y "y" son iguales');
      document.write('"x" y "y" son iguales <br>');
    } else if (x === z && x !== y) {
      console.log('"x" y "z" son iguales');
      document.write('"x" y "z" son iguales <br>');
    } else if (y === z && y !== x) {
      console.log('"y" y "z" son iguales');
      document.write('"y" y "z" son iguales <br>');
    }
  }
  console.log('El numero mayor es: ' + mayor);
  document.write("El numero mayor es: " + mayor + "<br>");
}
