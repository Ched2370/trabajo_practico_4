try {
    x = prompt('Ingrese una palabra');
    console.log(x.toUpperCase());
    document.write(x.toUpperCase() + '<br>');
    console.log('El largo de la palabra es de ' + x.length + ' caracteres');
    document.write('El largo de la palabra es de ' + x.length + ' caracteres');
} catch (err) {
    alert('un error ' + err.name);
}