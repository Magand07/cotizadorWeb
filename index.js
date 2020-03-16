if (carrito.modelo == "Freedom RXV") {
    document.getElementById("botones_caracteristicas").innerHTML = "" +
        "<ul>" +
        "<li><input type='button' value='Asientos extra (2) $1,558' onclick='calcular(1558);llenarTabla('ae_t');'>" +
        "</li>" +
        "<li><input type='button' value='Rines $727.3' onclick='calcular(727.3);cambiarFoto(9);llenarTabla('r_t');'>" +
        "</li>" +
        "<li><input type='button' value='Sonido $772.8' onclick='calcular(772.8);llenarTabla('s_t');'>" +
        "</li>" +
        "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156.54);llenarTabla('hi_t');'>" +
        "</li>" +
        "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156.54);llenarTabla('hd_t');'>" +
        "</li>" +//colors
        "<li><input class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor('Negro');'>" +
        "</li>" +
        "<li><input class='c_rojo' type='button' name='Rojo' id='Rojo'" +
        " onclick='cambiarFoto(0);llenarTablaColor('Rojo');'>" +
        "</li>" +
        "<li><input class='c_blanco' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_inf_red' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_azul_electric' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_almond' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_charcoal' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_platinum' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "<li><input class='c_ocean_gray' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "</ul>";

} else if (carrito.modelo == "Freedom TXT") {
    document.getElementById("botones_caracteristicas").innerHTML = "" +
        "<ul>" +
        "<li><input type='button' value='Asientos extra (2) $1,558' onclick='calcular(1558);llenarTabla('ae_t');'>" +
        "</li>" +
        "<li><input type='button' value='Rines $727.3' onclick='calcular(727.3);cambiarFoto(9);llenarTabla('r_t');'>" +
        "</li>" +
        "<li><input type='button' value='Sonido $772.8' onclick='calcular(772.8);llenarTabla('s_t');'>" +
        "</li>" +
        "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156.54);llenarTabla('hi_t');'>" +
        "</li>" +
        "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156.54);llenarTabla('hd_t');'>" +
        "</li>" +
        "<li><input class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor('Negro');'>" +
        "</li>" +
        "<li><input class='c_rojo' type='button' name='Rojo' id='Rojo'" +
        " onclick='cambiarFoto(0);llenarTablaColor('Rojo');'>" +
        "</li>" +
        "<li><input class='c_blanco' type='button' name='Blanco' id='Blanco'" +
        " onclick='cambiarFoto(4);llenarTablaColor('Blanco');'>" +
        "</li>" +
        "</ul>";
}

switch (carrito.type) {
    case "Elite":
            document.getElementById("descripcion_carrito").innerHTML = descripcion_elite_rxv;
        break;
    case "Gas":
        if(carrito.modelo == "Freedom TXT"){
            document.getElementById("descripcion_carrito").innerHTML = descripcion_gas_txt;
        }else{
            document.getElementById("descripcion_carrito").innerHTML = descripcion_gas_rvx;
        }
        break;
    case "Electrico":
        if(carrito.modelo == "Freedom TXT"){
            document.getElementById("descripcion_carrito").innerHTML = descripcion_gas_txt;
        }else{
            document.getElementById("descripcion_carrito").innerHTML = descripcion_electrico_rvx;
        }
        break;
}
// types of each model
if(carrito.modelo == "Freedom TXT"){
    document.getElementById("types").innerHTML = ""+
        "<li>"+
        "<input class='modelo_list' type='button' value='Gas'>"+
        "</li>"+
        "<li>"+
        "<input class='modelo_list' type='button' value='Electrico'>"+
        "</li>";
}else{
    document.getElementById("types").innerHTML = ""+
        "<li>"+
        "<input class='modelo_list' type='button' value='Elite'>"+
        "</li>"+
        "<li>"+
        "<input class='modelo_list' type='button' value='Gas'>"+
        "</li>"+
        "<li>"+
        "<input class='modelo_list' type='button' value='Electrico'>"+
        "</li>";
}

