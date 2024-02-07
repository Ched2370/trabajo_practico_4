try {
     var suma = 0;
        do {
            x = prompt('Ingrese un numero');
            /*console.log(x);*/
            if(!isNaN(x) && x != -1) {
                suma += Number(x);
                console.log('ingreso el numero ' + x);
                document.write('ingreso el numero: ' + x + '<br>');
            }
        }while(x != -1)
        console.log('La suma de los numero ingresados es: ' + suma);
        document.write('La suma de los numeros ingresados es: ' + suma + '<br>');
} catch (err) {
    alert('al surjido un error ' + err.name);
}