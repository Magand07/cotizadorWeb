function setModelo(modelo){
    $.ajax({
        type: "GET",
        url: 'index.html',
        data: "id=carrito_model",
        success: function (data) {
            if (modelo == "Freedom RXV") {
                document.getElementById("botones_caracteristicas").innerHTML = "" +
                    "<ul>" +
                    input_adds_rxv+input_colores_rxv+
                    "</ul>";
            
            } else if (modelo == "Freedom TXT") {
                document.getElementById("botones_caracteristicas").innerHTML = "" +
                    "<ul>" +
                    input_adds_txt+input_colores_txt+
                    "</ul>";
            }
            types(modelo);
        }
    });
}
// despliega la lista de botones para los tipos de carritos para cada modelo
function types(modelo){
    var types = "";
    if(modelo == "Freedom RXV"){
        types = ""+
        "<li>"+
            "<input class='modelo_list' type='button' value='Gas' onclick='showDescription(\"Freedom RXV\",\"Gas\");'/>"+
        "</li>"+
        "<li>"+
            "<input class='modelo_list' type='button' value='Electrico' onclick='showDescription(\"Freedom RXV\",\"Electrico\");'/>"+
        "</li>"+
        "<li>"+
            "<input class='modelo_list' type='button' value='Elite' onclick='showDescription(\"Freedom RXV\",\"Elite\");'/>"+
        "</li>";
    }else{
        types = ""+
        "<li>"+
            "<input class='modelo_list' type='button' value='Gas' onclick='showDescription(\"Freedom TXT\",\"Gas\");'/>"+
        "</li>"+
        "<li>"+
            "<input class='modelo_list' type='button' value='Electrico' onclick='showDescription(\"Freedom TXT\",\"Electrico\");'/>"+
        "</li>";
    }
    document.getElementById('types').innerHTML = types;

}

// despliega la descripcion del modelo y tipo
function showDescription(modelo,type){

    //alert(modelo+type);
    $.ajax({
        type: "GET",
        url: 'index.html',
        data: "id=descripcion_carrito", // appears as $_GET['id'] @ your backend side
        success: function (data) {
            var desc = "";
            carrito.setModelo(modelo);
            carrito.setType(type);
            carrito.setCost();
            switch (type) {
                case "Elite":
                    desc = descripcion_elite_rxv+carrito.cost;
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
            document.getElementById("descripcion_carrito").innerHTML = desc;
            document.getElementById("modelo_tipo").innerHTML = modelo+" "+type;           
            document.getElementById("total").innerHTML = "Total $"+carrito.cost+" usd";
            document.getElementById("total_t").innerHTML = "Total $"+carrito.cost+" usd";   
            document.getElementById("resume").innerHTML = "La presente cotizacion"+
                                                        " es del carro de golf "+
                                                        carrito.modelo + "  en su versión "+
                                                        carrito.type+
                                                        " , con las siguientes caracteristicas:";   
        }
    });
}

 