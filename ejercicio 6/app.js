try {
    var x = [32, 45, 78, 99, 12, 21];
    for (let y of x) {
        if(Number(y) % 3 == 0){
            console.log(y);
            document.write(y + '<br>');
        }
    }
} catch (err) {
    alert('un error' + err.name);
}