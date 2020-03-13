/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */
function calcular(extra){
    costo = parseFloat(costo) + parseFloat(extra);
    let msg = "Total $";
    let moneda = " usd";
    document.getElementById("total").innerHTML = msg+costo+moneda;
    document.getElementById("total_t").innerHTML = msg+costo+moneda;
}

function cambiarFoto(num){
    $('.carousel').carousel(num);
    $('.carousel').carousel('pause');     
}

function llenarTabla(posicion){
    let valor = "Si";
    document.getElementById(posicion).innerHTML = valor;
}

function llenarTablaColor(color){
    document.getElementById('c_t').innerHTML = color;
}

function borrarCot(){
    location.reload();
}
