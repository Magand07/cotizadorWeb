/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */
setModelo("Freedom TXT");
showDescription(carrito.modelo, carrito.type);

function setModelo(modelo) {
    resetFlags();
    resetTable();
    allOff();
    $("#colores_top").hide();
    $("#colores_asientos").hide();
    if (modelo == "Freedom RXV") {
        $(".rojo").show();
        document.getElementById("botones_caracteristicas").innerHTML = "" +
            "<ul>" + input_adds_rxv + "<ul>";
        document.getElementById("colores").innerHTML = input_colores_rxv;
        $(".contenedor_imagen").show();
        $("#Contenedor_slider").hide();
        $("#tabla_cotizacion_txt").hide();
        $("#tabla_cotizacion_rxv").show();
    }
    if (modelo == "Freedom TXT") {
        document.getElementById("botones_caracteristicas").innerHTML = "" +
            "<ul>" + inputs_adds_basics + "</ul>";
        document.getElementById("colores").innerHTML = input_colores_txt;
        $("#Contenedor_slider").show();
        $(".contenedor_imagen").hide();
        $("#tabla_cotizacion_txt").show();
        $("#tabla_cotizacion_rxv").hide();
        showDescription("Freedom TXT", "GAS");
    }
    types(modelo);
}

//despliega los tipos de carro disponibles para los modelos
function types(modelo) {
    var types = "";
    if (modelo == "Freedom RXV") {
        types = "" +
            "<li>" +
            "<input class='modelo_list' type='button' value='Gas' onclick='showDescription(\"Freedom RXV\",\"Gas\");'/>" +
            "</li>" +
            "<li>" +
            "<input class='modelo_list' type='button' value='Electrico' onclick='showDescription(\"Freedom RXV\",\"Electrico\");'/>" +
            "</li>" +
            "<li>" +
            "<input class='modelo_list' type='button' value='Elite' onclick='showDescription(\"Freedom RXV\",\"Elite\");'/>" +
            "</li>";
    }
    document.getElementById('types').innerHTML = types;
}

// despliega la descripcion del modelo y tipo
function showDescription(modelo, type) {

    var desc = "";
    var resume = "";
    carrito.setModelo(modelo);
    carrito.setType(type);
    carrito.setCost();
    stotal = carrito.cost;
    if (modelo == "Freedom TXT") {

        desc = descripcion_gas_txt;

        //document.getElementById("total").innerHTML = "Total $" + carrito.cost + " usd";
        //document.getElementById("total_t").innerHTML = "Total $" + carrito.cost + " usd";
        //document.getElementById("resume").innerHTML = 
        resume = "La presente cotizacion es del carro de golf " + carrito.modelo + "  en su versión Gas, con las siguientes caracteristicas:";
        //document.getElementById("botones_caracteristicas").innerHTML = "" +
        //    "<ul>" +
        //    inputs_adds_basics + input_colores_txt +
        //    "</ul>";
    } else {
        switch (type) {
            case "Elite":
                desc = descripcion_elite_rxv + carrito.cost;
                break;
            case "Gas":
                if (modelo == "Freedom TXT") {
                    desc = descripcion_gas_txt;
                } else {
                    desc = descripcion_gas_rxv;
                }
                break;
            case "Electrico":
                if (modelo == "Freedom TXT") {
                    desc = descripcion_gas_txt;
                } else {
                    desc = descripcion_electrico_rxv;
                }
                break;
        }
        resume = "La presente cotizacion es del carro de golf " + carrito.modelo + " en su versión " + carrito.type + ", con las siguientes caracteristicas:";
    }

    document.getElementById("descripcion_carrito").innerHTML = desc; // descripcion caracteristicas
    document.getElementById("resume").innerHTML = resume; // lore tabla
    document.getElementById("modelo_tipo").innerHTML = modelo + " " + type;// title
    document.getElementById("total").innerHTML = "Total $" + carrito.cost + " usd";
    document.getElementById("total_t").innerHTML = "Total $" + carrito.cost + " usd";

}
// muestra los colores disponibles para el asiento extra
function coloresAsientos() {
    if(carrito.modelo == "Freedom RXV"){
        document.getElementById("colores_asientos").innerHTML = "Color asiento extra: " + colores_asientos_rxv;// ahora faltara una funcion que los borre
    }else{
        document.getElementById("colores_asientos").innerHTML = "Color asiento extra: " + colores_asientos;// ahora faltara una funcion que los borre
    }
    $("#colores_asientos").show();
}
// muestra los colores de acuerdo al tamaño de top
function CT_tabla(medida) {
    var colores_top = "";
    if (medida == 80) {
        colores_top = colores_top_80;
    } else if (medida == 54) {
        colores_top = colores_top_54;
    }
    document.getElementById("colores_top").innerHTML = "Color Top: " + colores_top;
    $("#colores_top").show();
}