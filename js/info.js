// Constants
let descripcion_gas_rxv = "Motor de gasolina de 13.5 hp con inyección electrónica de combustible de circuito cerrado" +
    "<br>Suspensión delantera independiente" +
    "<br>Asiento optativo orientado hacia atrás" +
    "<br>Actualizado con portavasos grandes";

let descripcion_electrico_rxv = "Tren motriz de 48 voltios CA" +
    "<br>Tecnología avanzada IntelliBrake™ " +
    "<br>Suspensión delantera independiente" +
    "<br>Asiento optativo orientado hacia atrás";

let descripcion_elite_rxv = "Baterías de litio sin mantenimiento"+
 "<br>Garantia de bateria de 8 años lider en la industria" +
 "<br>Eficiencia energética inmejorable" +
 "<br>Rendimiento probado de las baterías de litio Samsung SDI";


let descripcion_gas_txt = "Motor de gasolina de 13.5 hp con inyección electrónica de combustible de circuito cerrado" +
    "<br>Los amortiguadores hidráulicos ayudan en una conducción suave" +
    "<br>Indicador de combustible" +
    "<br>Asiento optativo orientado hacia atrás";

let descripcion_electrico_txt = "Tren motriz de 48 voltios CC" +
    "<br>Los amortiguadores hidráulicos ayudan en una conducción suave" +
    "<br>Medidor de estado de carga" +
    "<br>Asiento optativo orientado hacia atrás";

let input_colores_txt = "<li><input class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor(\"Negro\");'>" +
                        "</li>" +
                        "<li><input class='c_rojo' type='button' name='Rojo' id='Rojo'" +
                        " onclick='cambiarFoto(0);llenarTablaColor(\"Rojo\");'>" +
                        "</li>" +
                        "<li><input class='c_blanco' type='button' name='Blanco' id='Blanco'" +
                        " onclick='cambiarFoto(4);llenarTablaColor(\"Blanco\");'>" +
                        "</li>";
let input_adds_txt = "<li><input type='button' value='Asientos extra (2) $1,558' onclick='calcular(1558);llenarTabla(\"ae_t\");'>" +
                    "</li>" +
                    "<li><input type='button' value='Rines $727.3' onclick='calcular(727.3);cambiarFoto(9);llenarTabla(\"r_t\");'>" +
                    "</li>" +
                    "<li><input type='button' value='Sonido $772.8' onclick='calcular(772.8);llenarTabla(\"s_t\");'>" +
                    "</li>" +
                    "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156.54);llenarTabla(\"hi_t\");'>" +
                    "</li>" +
                    "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156.54);llenarTabla(\"hd_t\");'>" +
                    "</li>";

let input_colores_rxv = "<li><input class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor(\"Negro\");'>" +
                        "</li>" +
                        "<li><input class='c_rojo' type='button' name='Rojo' id='Rojo' onclick='cambiarFoto(0);llenarTablaColor(\"Rojo\");'>" +
                        "</li>" +
                        "<li><input class='c_blanco' type='button' name='Blanco' id='Blanco' onclick='cambiarFoto(4);llenarTablaColor(\"Blanco\");'>" +
                        "</li>" +
                        "<li><input class='c_inf_red' type='button' name='Inf_red' id='Inf_red' onclick='cambiarFoto(4);llenarTablaColor(\"Inf red\");'>" +
                        "</li>" +
                        "<li><input class='c_azul_electric' type='button' name='Azul electric' id='Azul electric' onclick='cambiarFoto(4);llenarTablaColor(\"Azul electric\");'>" +
                        "</li>" +
                        "<li><input class='c_almond' type='button' name='Almond' id='Almond' onclick='cambiarFoto(4);llenarTablaColor(\"Almond\");'>" +
                        "</li>" +
                        "<li><input class='c_charcoal' type='button' name='Charcoal' id='Charcoal' onclick='cambiarFoto(4);llenarTablaColor(\"Charcoal\");'>" +
                        "</li>" +
                        "<li><input class='c_platinum' type='button' name='Platinum' id='Platinum' onclick='cambiarFoto(4);llenarTablaColor(\"Platinum\");'>" +
                        "</li>" +
                        "<li><input class='c_ocean_gray' type='button' name='Ocean gray' id='Ocean gray' onclick='cambiarFoto(4);llenarTablaColor(\"Ocean gray\");'>" +
                        "</li>";
let input_adds_rxv = "<li><input type='button' value='Asientos extra (2) $1,558' onclick='calcular(1558);llenarTabla(\"ae_t\");'>" +
                        "</li>" +
                        "<li><input type='button' value='Rines $727.3' onclick='calcular(727.3);cambiarFoto(9);llenarTabla(\"r_t\");'>" +
                        "</li>" +
                        "<li><input type='button' value='Sonido $772.8' onclick='calcular(772.8);llenarTabla(\"s_t\");'>" +
                        "</li>" +
                        "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156.54);llenarTabla(\"hi_t\");'>" +
                        "</li>" +
                        "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156.54);llenarTabla(\"hd_t\");'>" +
                        "</li>";                        

let tabla_rxv = "";

let tabla_txt = ''+
'<table>'+
'<tr>'+
    '<th class="title2">Color</th>'+
    '<th class="title2">Asientos extra</th>'+
    '<th class="title2">Rines</th>'+
    '<th class="title2">Hielera Izquierda</th>'+
    '<th class="title2">Hielera Derecha</th>'+
    '<th class="title2">Sonido</th>'+
'</tr>'+
'<tr>'+
    '<td name="c_t" id="c_t">'+
    '</td>'+
    '<td name="ae_t" id="ae_t" class="f2">'+
    '</td>'+
    '<td name="r_t" id="r_t">'+
    '</td>'+
    '<td name="hi_t" id="hi_t" class="f2">'+
    '</td>'+
    '<td name="hd_t" id="hd_t">'+
    '</td>'+
    '<td name="s_t" id="s_t" class="f2">'+
    '</td>'+
'</tr>'+
'</table>';