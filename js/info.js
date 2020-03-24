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

let input_colores_txt = "<li><input alt='Black' class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarFoto(7);llenarTablaColor(\"Negro\");'>" +
    "</li>" +
    "<li><input alt='Red' class='c_rojo' type='button' name='Rojo' id='Rojo'" +
    " onclick='cambiarFoto(0);llenarTablaColor(\"Rojo\");'>" +
    "</li>" +
    "<li><input alt='White' class='c_blanco' type='button' name='Blanco' id='Blanco'" +
    " onclick='cambiarFoto(4);llenarTablaColor(\"Blanco\");'>" +
    "</li>";

let inputs_adds_basics = "" +
    "<li><input type='button' value='Asientos extra (2) $1,558' onclick='coloresAsientos();calcular(1558,\"Asientos extra\",getElementById(\"asientos_extra\"),\"ae_t\");llenarTabla(\"ae_t\",\"Si\");'>" +
    "</li>" +
    "<li><input type='button' value='Rines $727.3' onclick='calcular(727.3,\"Rines\",getElementById(\"rines\"),\"r_t\");cambiarFoto(9,\"r_t\");llenarTabla(\"r_t\",\"Si\");'>" +
    "</li>" +
    "<li><input type='button' value='Sonido $772.8' onclick='calcular(772.8,\"Sonido\",getElementById(\"sonido\"),\"s_t\");llenarTabla(\"s_t\",\"Si\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Izquierda $156.54' onclick='calcular(156.54,\"Hielera Izquierda\",getElementById(\"hielera_izq\"),\"hi_t\");llenarTabla(\"hi_t\",\"Si\");'>" +
    "</li>" +
    "<li><input type='button' value='Hielera Derecha $156.54' onclick='calcular(156.54,\"Hielera Derecha\",getElementById(\"hielera_der\"),\"hd_t\");llenarTabla(\"hd_t\",\"Si\");'>" +
    "</li>";

let input_colores_rxv = "<li><input alt='Black' class='c_negro' type='button' name='Negro' id='Negro' onclick='cambiarColor(\"negro\",getElementById(\"negro\"));cambiarFoto(7);llenarTablaColor(\"Negro\");'>" +
    "</li>" +
    "<li><input alt='Red' class='c_rojo' type='button' name='Rojo' id='Rojo' onclick='cambiarColor(\"rojo\",getElementById(\"rojo\"));cambiarFoto(0);llenarTablaColor(\"Rojo\");'>" +
    "</li>" +
    "<li><input alt='White' class='c_blanco' type='button' name='Blanco' id='Blanco' onclick='cambiarColor(\"blanco\",getElementById(\"blanco\"));cambiarFoto(4);llenarTablaColor(\"Blanco\");'>" +
    "</li>" +
    "<li><input alt='Inferno red' class='c_inf_red' type='button' name='Inf_red' id='Inf_red' onclick='cambiarColor(\"inf_red\",getElementById(\"inf_red\"));cambiarFoto(4);llenarTablaColor(\"Inf red\");'>" +
    "</li>" +
    "<li><input alt='Azul electric' class='c_azul_electric' type='button' name='Azul electric' id='Azul electric' onclick='cambiarColor(\"azul_electric\",getElementById(\"azul_electric\"));cambiarFoto(4);llenarTablaColor(\"Azul electric\");'>" +
    "</li>" +
    "<li><input alt='Almond' class='c_almond' type='button' name='Almond' id='Almond' onclick='cambiarColor(\"almond\",getElementById(\"almond\"));cambiarFoto(4);llenarTablaColor(\"Almond\");'>" +
    "</li>" +
    "<li><input alt='Charcoal' class='c_charcoal' type='button' name='Charcoal' id='Charcoal' onclick='cambiarColor(\"charcoal\",getElementById(\"charcoal\"));cambiarFoto(4);llenarTablaColor(\"Charcoal\");'>" +
    "</li>" +
    "<li><input alt='Platinum' class='c_platinum' type='button' name='Platinum' id='Platinum' onclick='cambiarColor(\"platinum\",getElementById(\"platinum\"));cambiarFoto(4);llenarTablaColor(\"Platinum\");'>" +
    "</li>" +
    "<li><input alt='Ocean gray' class='c_ocean_gray' type='button' name='Ocean gray' id='Ocean gray' onclick='cambiarColor(\"ocean_grey\",getElementById(\"ocean_grey\"));cambiarFoto(4);llenarTablaColor(\"Ocean gray\");'>" +
    "</li>";

let input_adds_rxv = "<li>" +
    "<input type='button' value='Luces LED $195.65' onclick='calcular(195.65,\"LucesLed\",getElementById(\"leds\"),\"led_t\");llenarTabla(\"led_t\",\"Si\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Turn Signals $305' onclick='calcular(305,\"TurnSignals\",getElementById(\"turn_signal\"),\"ts_t\");llenarTabla(\"ts_t\",\"Si\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Conductor $132.80' onclick='calcular(132.80,\"Caja guantes Conductor\",getElementById(\"guantes_conductor\"),\"gb_t\");llenarTabla(\"gb_t\",\"Conductor\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Pasajero $132.80' onclick='calcular(132.80,\"Caja guantes Pasajero\",getElementById(\"guantes_pasajero\"),\"gb_t\");llenarTabla(\"gb_t\",\"Pasajero\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Caja de guantes Ambos $204.82' onclick='calcular(204.82,\"Caja guantes Pasajero y Conductor\",getElementById(\"guantes_ambos\"),\"gb_t\");llenarTabla(\"gb_t\",\"Ambos\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Top 80in $315.12' onclick='calcular(315.12,\"Top80in\",getElementById(\"top_80\"),\"tp_t\");llenarTabla(\"tp_t\",\"80\");CT_tabla(\"80\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='Top 54in $271' onclick='calcular(271,\"Top54in\",getElementById(\"top_54\"),\"tp_t\");llenarTabla(\"tp_t\",\"54\");CT_tabla(\"54\");'>" +
    "</li>"+
    "<li>" +
    "<input type='button' value='Windshield Split $156' onclick='cambiar(\"split\",getElementById(\"split\"));calcular(156,\"wind_split\",getElementById(\"wind_split\"),\"w_t\");llenarTabla(\"w_t\",\"Split\");'>" +
    "</li>" +
    "<li>" +
    "<input type='button' value='WindShield Tinted $195.82' onclick='cambiar(\"tinted\",getElementById(\"tinted\"));calcular(195.82,\"wind_tinted\",getElementById(\"wind_tinted\"),\"w_t\");llenarTabla(\"w_t\",\"Tinted\");'>" +
    "</li>" ;

let colores_top_80 = '' +
    '<input type="button" alt="color stone beige" onclick="cambiar(\'stonebeige80\',getElementById(\'stonebeige80\'));" class="c_stone_beige" />' +
    '<input type="button" alt="color negro" onclick="cambiar(\'negro80\',getElementById(\'negro80\'));" class="c_negro" />' +
    '<input type="button" alt="color grey" onclick="cambiar(\'grey80\',getElementById(\'grey80\'));" class="c_grey" />' +
    '<input type="button" alt="color oyster" onclick="cambiar(\'oyster80\',getElementById(\'oyster80\'));" class="c_oyster" />';

let colores_top_54 = '' +
    '<input type="button" alt="color stonebeige" onclick="cambiar(\'stonebeige54\',getElementById(\'stonebeige54\'));" class="c_stone_beige" />' +
    '<input type="button" alt="color negro" onclick="cambiar(\'negro54\',getElementById(\'negro54\'));" class="c_negro" />' +
    '<input type="button" alt="color oyster" onclick="cambiar(\'oyster54\',getElementById(\'oyster54\'));" class="c_oyster" />';

let colores_asientos = '' +
    '<input type="button" alt="color beige" onclick="cambiar(\'abeige\',getElementById(\'abeige\'));" class="c_beige" />' +
    '<input type="button" alt="color grey" onclick="cambiar(\'agrey\',getElementById(\'agrey\'));" class="c_grey" />' +
    '<input type="button" alt="color negro" onclick="cambiar(\'anegro\',getElementById(\'anegro\'));" class="c_negro" />' +
    '<input type="button" alt="color oyster" onclick="cambiar(\'aoyster\',getElementById(\'aoyster\'));" class="c_oyster" />' +
    '<input type="button" alt="color stonebeige" onclick="cambiar(\'astonebeige\',getElementById(\'astonebeige\'));" class="c_stone_beige" />';

let tabla_rxv = '<tr>' +
    '<th class="title2">Color</th>' +
    '<th class="title2">Asientos extra</th>' +
    '<th class="title2">Rines</th>' +
    '<th class="title2">Hielera Izquierda</th>' +
    '<th class="title2">Hielera Derecha</th>' +
    '<th class="title2">Sonido</th>' +
    '<th class="title2">Windshield</th>' +
    '<th class="title2">Luces LED</th>' +
    '<th class="title2">Turn signals</th>' +
    '<th class="title2">Caja de guantes</th>' +
    '<th class="title2">Top </th>' +
    '<th class="title2">Color Top</th>' +
    '</tr>' +
    '<tr>' +
    '<td name="c_t" id="c_t">' +
    '</td>' +
    '<td name="ae_t" id="ae_t" class="f2">' +
    '</td>' +
    '<td name="r_t" id="r_t">' +
    '</td>' +
    '<td name="hi_t" id="hi_t" class="f2">' +
    '</td>' +
    '<td name="hd_t" id="hd_t">' +
    '</td>' +
    '<td name="s_t" id="s_t" class="f2">' +
    '</td>' +
    '<td name="w_t" id="w_t" >' +
    '</td>' +
    '<td name="led_t" id="led_t" class="f2">' +
    '</td>' +
    '<td name="ts_t" id="ts_t" class="f2">' +
    '</td>' +
    '<td name="gb_t" id="gb_t" >' +
    '</td>' +
    '<td name="tp_t" id="tp_t" class="f2">' +
    '</td>' +
    '<td name="tpc_t" id="tpc_t" >' +// este se modifica con eventos
    '</td>' +
    '</tr>';

let tabla_txt = '<tr>' +
    '<th class="title2">Color</th>' +
    '<th class="title2">Asientos extra</th>' +
    '<th class="title2">Rines</th>' +
    '<th class="title2">Hielera Izquierda</th>' +
    '<th class="title2">Hielera Derecha</th>' +
    '<th class="title2">Sonido</th>' +
    '</tr>' +
    '<tr>' +
    '<td name="c_t" id="c_t">' +
    '</td>' +
    '<td name="ae_t" id="ae_t" class="f2">' +
    '</td>' +
    '<td name="r_t" id="r_t">' +
    '</td>' +
    '<td name="hi_t" id="hi_t" class="f2">' +
    '</td>' +
    '<td name="hd_t" id="hd_t">' +
    '</td>' +
    '<td name="s_t" id="s_t" class="f2">' +
    '</td>' +
    '</tr>';
let carrousel = ''+
      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'+
        '<ol class="carousel-indicators">'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>'+
'          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>'+
        '</ol>'+
        '<div class="carousel-inner">'+
'          <div class="carousel-item active">'+
            '<img class="d-block w-100" src="images/gasRojo0.PNG" alt="Primer slide" title="Gas Rojo" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasRojo1.PNG" alt="Segundo slide" title="Gas Rojo" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasRojo2.PNG" alt="Tercer slide" title="Gas Rojo Asientos Extra"'+
              'width="500px" height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/electricNegro0.PNG" alt="Electrico Negro" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasBlanco0.PNG" alt="Gas Blanco " title="Gas Blanco" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasBlanco1.PNG" alt="Gas Blanco " title="Gas Blanco" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasBlanco2.PNG" alt="Gas Blanco Asientos Extra"'+
              'title="Gas Rojo Asientos Extra" width="500px" height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasNegro0.PNG" alt="Gas Negro" title="Gas Negro" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasNegro1.PNG" alt="Gas Negro" title="Gas Negro" width="500px"'+
              'height="340px">'+
'          </div>'+
'          <div class="carousel-item">'+
            '<img class="d-block w-100" src="images/gasNegro2.PNG" alt="Gas Negro" title="Gas Negro Asientos Extra"'+
              'title="Gas Rojo Asientos Extra" width="500px" height="340px">'+
'          </div>'+
        '</div>'+
      '</div>'+
      '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'+
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
        '<span class="sr-only">Previous</span>'+
      '</a>'+
      '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'+
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
        '<span class="sr-only">Next</span>'+
      '</a>';