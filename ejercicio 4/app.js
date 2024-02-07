try {
    x = prompt('Ingrese el numero  "x"');
    if (x % 2 === 0) {
        console.log('el numero es par');
        document.write('el numero es par <br>');
    }else {
        console.log('el numero es impar');
        document.write('el numero es impar <br>');
    }
}catch (err) {
    alert('un error ' +  err.name);
}