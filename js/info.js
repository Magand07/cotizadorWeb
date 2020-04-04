/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */

// Constants
let descripcion_gas_rxv = "Motor de gasolina de 13.5 hp con inyección electrónica de combustible de circuito cerrado" +
    "<br>Suspensión delantera independiente" +
    "<br>Asiento optativo orientado hacia atrás" +
    "<br>Actualizado con portavasos grandes";

let descripcion_electrico_rxv = "Tren motriz de 48 voltios CA" +
    "<br>Tecnología avanzada IntelliBrake™ " +
    "<br>Suspensión delantera independiente" +
    "<br>Asiento optativo orientado hacia atrás";

let descripcion_elite_rxv = "Baterías de litio sin mantenimiento" +
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

let input_colores_txt = "<ul class='square'>" + "<h5>Color </h5>" +
    "<li><input title='Black' class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor(\"Negro\");'>" +
    "</li>" +
    "<li><input title='Red' class='c_rojo' type='button' name='Rojo' id='Rojo'" +
    " onclick='cambiarFoto(0);llenarTablaColor(\"Rojo\");'>" +
    "</li>" +
    "<li><input title='White' class='c_blanco' type='button' name='Blanco' id='Blanco'" +
    " onclick='cambiarFoto(4);llenarTablaColor(\"Blanco\");'>" +
    "</li>" +
    "</ul>";

let inputs_adds_basics = "<li>" +
    "<input type='button' value='Asientos Premium $394' onclick='asientoPremium();'>" +
    "</li>" +
    "<li>" +
    "<input id='aeb' type='button' value='Asientos extra (2) $1,558' onclick='coloresAsientos();calcular(1558,0,\"Asientos extra\",getElementById(\"asientos_extra\"),\"ae_t\");'>" +
    "</li>" +
    "<li><input type='button' value='Rines $727.3' onclick='calcular(727,30,\"Rines\",getElementById(\"rines\"),\"r_t\");cambiarFoto(9,\"r_t\");'>" +
    "</li>" +
    "<li><input type='button' value='Sonido $772.8' onclick='calcular(772,80,\"Sonido\",getElementById(\"sonido\"),\"s_t\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156,54,\"Hielera Izquierda\",getElementById(\"hielera_izq\"),\"hi_t\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156,54,\"Hielera Derecha\",getElementById(\"hielera_der\"),\"hd_t\");'>" +
    "</li>";

let input_colores_rxv = "<ul class='square'>" + "<h5>Color </h5>" +
    "<li><input title='Black' class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarColor(\"negro\",getElementById(\"negro\"));cambiarFoto(7);llenarTabla(\"c_t_rxv\",\"Negro\");'>" +
    "</li>" +
    "<li><input title='Red' class='c_rojo' type='button' name='Rojo' id='Rojo' onclick='cambiarColor(\"rojo\",getElementById(\"rojo\"));cambiarFoto(0);llenarTabla(\"c_t_rxv\",\"Rojo\");'>" +
    "</li>" +
    "<li><input title='White' class='c_blanco' type='button' name='Blanco' id='Blanco' onclick='cambiarColor(\"blanco\",getElementById(\"blanco\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Blanco\");'>" +
    "</li>" +
    "<li><input title='Inferno red' class='c_inf_red' type='button' name='Inf_red' id='Inf_red' onclick='cambiarColor(\"inf_red\",getElementById(\"inf_red\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Inf red\");'>" +
    "</li>" +
    "<li><input title='Azul electric' class='c_azul_electric' type='button' name='Azul electric' id='Azul electric' onclick='cambiarColor(\"azul_electric\",getElementById(\"azul_electric\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Azul electric\");'>" +
    "</li>" +
    "<li><input title='Almond' class='c_almond' type='button' name='Almond' id='Almond' onclick='cambiarColor(\"almond\",getElementById(\"almond\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Almond\");'>" +
    "</li>" +
    "<li><input title='Charcoal' class='c_charcoal' type='button' name='Charcoal' id='Charcoal' onclick='cambiarColor(\"charcoal\",getElementById(\"charcoal\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Charcoal\");'>" +
    "</li>" +
    "<li><input title='Platinum' class='c_platinum' type='button' name='Platinum' id='Platinum' onclick='cambiarColor(\"platinum\",getElementById(\"platinum\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Platinum\");'>" +
    "</li>" +
    "<li><input title='Ocean gray' class='c_ocean_gray' type='button' name='Ocean gray' id='Ocean gray' onclick='cambiarColor(\"ocean_grey\",getElementById(\"ocean_grey\"));cambiarFoto(4);llenarTabla(\"c_t_rxv\",\"Ocean gray\");'>" +
    "</li>" +
    "</ul>";

let input_adds_rxv = "<li>" +
    "<input type='button' value='Asientos Premium $394' onclick='asientoPremium();'>" +
    "</li>" +
    "<li>" +
    "<input id='aebrxv' type='button' value='Asientos extra (2) $1,558' onclick='coloresAsientos();calcular(1558,0,\"Asientos extra\",getElementById(\"asientos_extra\"),\"ae_t_rxv\");'>" +
    "</li>" +
    "<li><input type='button' value='Rines $727.3' onclick='calcular(727,30,\"Rines\",getElementById(\"rines\"),\"r_t_rxv\");cambiarFoto(9,\"r_t\");'>" +
    "</li>" +
    "<li><input type='button' value='Sonido $772.8' onclick='calcular(772,80,\"Sonido\",getElementById(\"sonido\"),\"s_t_rxv\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156,54,\"Hielera Izquierda\",getElementById(\"hielera_izq\"),\"hi_t_rxv\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156,54,\"Hielera Derecha\",getElementById(\"hielera_der\"),\"hd_t_rxv\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Luces LED $195.65' onclick='calcular(195,65,\"LucesLed\",getElementById(\"leds\"),\"led_t\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Turn Signals $305' onclick='calcular(305,0,\"TurnSignals\",getElementById(\"turn_signal\"),\"ts_t\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Conductor $132.80' onclick='calcular(132,80,\"Caja guantes Conductor\",getElementById(\"guantes_conductor\"),\"gb_t\",\"Conductor\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Pasajero $132.80' onclick='calcular(132,80,\"Caja guantes Pasajero\",getElementById(\"guantes_pasajero\"),\"gb_t\",\"Pasajero\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Ambos $204.82' onclick='calcular(204,82,\"Caja guantes Pasajero y Conductor\",getElementById(\"guantes_ambos\"),\"gb_t\",\"Ambos\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Top 80in $315.12' onclick='CT_tabla(\"80\");calcular(315,12,\"Top80in\",getElementById(\"top_80\"),\"tp_t\",\"80in\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Top 54in $271' onclick='CT_tabla(\"54\");calcular(271,0,\"Top54in\",getElementById(\"top_54\"),\"tp_t\",\"54in\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Windshield Split $156' onclick='allWindshieldOff();calcular(156,0,\"WindShield Split\",getElementById(\"split\"),\"w_t\",\"Split\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='WindShield Tinted $195.82' onclick='allWindshieldOff();calcular(195,82,\"WindShield Tinted\",getElementById(\"tinted\"),\"w_t\",\"Tinted\");'>" +
    "</li>";

let colores_top_80 = '' +
    '<input type="button" title="stone beige" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'StoneBeige\');cambiar(\'stonebeige80\',getElementById(\'stonebeige80\'));" class="c_stone_beige" />' +
    '<input type="button" title="negro" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Negro\');cambiar(\'negro80\',getElementById(\'negro80\'));" class="c_negro" />' +
    '<input type="button" title="grey" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Grey\');cambiar(\'grey80\',getElementById(\'grey80\'));" class="c_grey" />' +
    '<input type="button" title="oyster" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Oyster\');cambiar(\'oyster80\',getElementById(\'oyster80\'));" class="c_oyster" />';

let colores_top_54 = '' +
    '<input type="button" title="stonebeige" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Stonebeige\');cambiar(\'stonebeige54\',getElementById(\'stonebeige54\'));" class="c_stone_beige" />' +
    '<input type="button" title="negro" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Negro\');cambiar(\'negro54\',getElementById(\'negro54\'));" class="c_negro" />' +
    '<input type="button" title="oyster" onclick="allTopsOff();llenarTabla(\'tpc_t\',\'Oyster\');cambiar(\'oyster54\',getElementById(\'oyster54\'));" class="c_oyster" />';

let colores_asientos = '' +
    '<input type="button" title="beige" onclick="allAsientosOff();llenarTabla(\'ae_t\',\'Beige\');cambiar(\'abeige\',getElementById(\'abeige\'));" class="c_beige" />' +
    '<input type="button" title="grey" onclick="allAsientosOff();llenarTabla(\'ae_t\',\'Grey\');cambiar(\'agrey\',getElementById(\'agrey\'));" class="c_grey" />' +
    '<input type="button" title="negro" onclick="allAsientosOff();llenarTabla(\'ae_t\',\'Negro\');cambiar(\'anegro\',getElementById(\'anegro\'));" class="c_negro" />' +
    '<input type="button" title="oyster" onclick="allAsientosOff();llenarTabla(\'ae_t\',\'Oyster\');cambiar(\'aoyster\',getElementById(\'aoyster\'));" class="c_oyster" />' +
    '<input type="button" title="stonebeige" onclick="allAsientosOff();llenarTabla(\'ae_t\',\'StoneBeige\');cambiar(\'astonebeige\',getElementById(\'astonebeige\'));" class="c_stone_beige" />';

let colores_asientos_rxv = '' +
    '<input type="button" title="beige" onclick="allAsientosOff();llenarTabla(\'ae_t_rxv\',\'Beige\');cambiar(\'abeige\',getElementById(\'abeige\'));" class="c_beige" />' +
    '<input type="button" title="grey" onclick="allAsientosOff();llenarTabla(\'ae_t_rxv\',\'Grey\');cambiar(\'agrey\',getElementById(\'agrey\'));" class="c_grey" />' +
    '<input type="button" title="negro" onclick="allAsientosOff();llenarTabla(\'ae_t_rxv\',\'Negro\');cambiar(\'anegro\',getElementById(\'anegro\'));" class="c_negro" />' +
    '<input type="button" title="oyster" onclick="allAsientosOff();llenarTabla(\'ae_t_rxv\',\'Oyster\');cambiar(\'aoyster\',getElementById(\'aoyster\'));" class="c_oyster" />' +
    '<input type="button" title="stonebeige" onclick="allAsientosOff();llenarTabla(\'ae_t_rxv\',\'StoneBeige\');cambiar(\'astonebeige\',getElementById(\'astonebeige\'));" class="c_stone_beige" />';
