/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */
// convierte el total global a tipo saldo
function totalToSaldo(){
  var dot = String(stotal).indexOf(".");
  var ent = Number.parseInt(stotal);
  var cent = 0;
  if(dot != -1){
    ent = String(stotal).substr(0,dot);
    cent = String(stotal).substr(dot+1);
    console.log(ent+","+cent);
  }
  return new Saldo(Number.parseInt(ent),Number.parseInt(cent));
}
function calcular(costo_e,costo_c=0, nombre, input, id_tabla, val_tabla = "Si") {// este sera un problema 
  //alert("CALCULAR id tabla: " + id_tabla + " input " + input + "=" + input.value);
  var newTotal = totalToSaldo();
  console.log(newTotal);
  if (noDoubleItem(nombre) != 1) {
    if (checkWindShield(nombre) != 1) {
      valor = input.value;
      var r = 0;
      var costo = new Saldo();
      costo.setEntero(Number.parseInt(costo_e));
      costo.setCentavos(Number.parseInt(costo_c));      
      if (valor == "false") {
        var respuesta = confirm("Cancelar " + nombre + "?");
        if (respuesta) {
          cancelWindshieldTop(nombre);
          cancelAsientos(nombre);
          cancelTop(nombre);
          input.value = true;
          r = newTotal.sub(costo);
          // cancela el costo en la tabla
          llenarTabla(id_tabla, "");
        }
      } else {
        r = newTotal.add(costo);
        llenarTabla(id_tabla, val_tabla);
        input.value = false;
      }
      stotal = newTotal.toString();
      document.getElementById("total").innerHTML = "Total $" + r + " usd";
      document.getElementById("total_t").innerHTML = "Total $" + r + " usd";

    }
  }
}

// oculta el div de colores para los asientos
function cancelAsientos(nombre) {
  if (nombre == "Asientos extra") {
    $("#colores_asientos").hide();
  }
}
//oculta el div de los colores para top
function cancelTop(nombre) {
  if (nombre == "Top54in" || nombre == "Top80in") {
    $("#colores_top").hide();
  }
}
// borrar y cancelar el windshield si se cancela el top
function cancelWindshieldTop(nombre) {
  //alert("nombre: "+nombre);
  var r = 0 ;
  if (nombre == "Top80in") {
    $("#colores_top").hide();
    allTopsOff();
    if (document.getElementById("split").value == "false") {
      var cost_windshield = new Saldo(156,0);
      r = stotal.sub(cost_windshield);
      $(".split").hide();
      document.getElementById("split").value = true;
      //alert("split: false \n costo : 156 \n total: " + stotal + "\n" + document.getElementById("split").value);
      document.getElementById("w_t").innerHTML = "";
      allWindshieldOff();
    }

    if (document.getElementById("tinted").value == "false") {
      var cost_windshield = new Saldo(195,82);
      r = stotal.sub(cost_windshield);
      $(".tinted").hide();
      document.getElementById("tinted").value = true;
      //alert("tinted: false \n costo : 195.82 \n total: " + stotal + "\n" + document.getElementById("tinted").value);
      document.getElementById("w_t").innerHTML = "";
      allWindshieldOff();
    }


  }
  if (nombre == "Top54in") {
    $("#colores_top").hide();
    allTopsOff();
    if (document.getElementById("split").value == "false") {
      var cost_windshield = new Saldo(156,0);
      r = stotal.sub(cost_windshield);
      $(".split").hide();
      document.getElementById("split").value = true;
      //alert("split: false \n costo : 156 \n total: " + stotal + "\n" + document.getElementById("split").value);
      document.getElementById("w_t").innerHTML = "";
      allWindshieldOff();
    }

    if (document.getElementById("tinted").value == "false") {
      var cost_windshield = new Saldo(195,82);
      r = stotal.sub(cost_windshield);
      $(".tinted").hide();
      document.getElementById("tinted").value = true;
      //alert("split: false \n costo : 195.82 \n total: " + stotal + "\n" + document.getElementById("tinted").value);
      document.getElementById("w_t").innerHTML = "";
      allWindshieldOff();
    }

  }
  document.getElementById("tp_t").innerHTML = "";
  document.getElementById("tpc_t").innerHTML = "";
  document.getElementById("total").innerHTML = "Total $" + r + " usd";
  document.getElementById("total_t").innerHTML = "Total $" + r + " usd";

}
// activar o desactivar la imagen de clase
// imagen - bandera
function cambiar(clase, input) {
  //alert(clase+" -> "+input.value);
  var bandera = input.value;
  if (bandera == "false") {
    $("." + clase).hide();
    input.value = true;
  } else {
    input.value = false;
    $("." + clase).show();
  }
}

// cambia el color del carrito 
function cambiarColor(clase, input) {
  //alert(clase+" -> "+input.value);
  var bandera = input.value;
  if (bandera == "false") {
    $("." + clase).hide();
    input.value = true;
    $(".negro").show();
  } else {
    input.value = false;
    allColorsOff();
    $("." + clase).show();
  }
}

// from bootstrap
function cambiarFoto(num) {
  $('.carousel').carousel(num);
  $('.carousel').carousel('pause');
}

function llenarTabla(posicion, valor) {
  document.getElementById(posicion).innerHTML = valor;
}
// se podria eliminar...NO!
function llenarTablaColor(color) {
  //alert(color);
  document.getElementById('c_t').innerHTML = color;
}
// borra el contenido de la pagina recargandola
function borrarCot() {
  location.reload();
}
// oculta todas las imagenes de inicio
function firstLoad() {
  $(".negro").hide();
  $(".rojo").show();
  $(".blanco").hide();
  $(".inf_red").hide();
  $(".azul_electric").hide();
  $(".almond").hide();
  $(".charcoal").hide();
  $(".platinum").hide();
  $(".ocean_grey").hide();
  $(".abeige").hide();
  $(".agrey").hide();
  $(".anegro").hide();
  $(".aoyster").hide();
  $(".astonebeige").hide();
  $(".astonebeige").hide();
  $(".stonebeige54").hide();
  $(".negro54").hide();
  $(".oyster54").hide();
  $(".stonebeige80").hide();
  $(".negro80").hide();
  $(".grey80").hide();
  $(".oyster80").hide();
  $(".split").hide();
  $(".tinted").hide();
}
// all off
function allOff() {
  $(".negro").hide();
  $(".rojo").hide();
  $(".blanco").hide();
  $(".inf_red").hide();
  $(".azul_electric").hide();
  $(".almond").hide();
  $(".charcoal").hide();
  $(".platinum").hide();
  $(".ocean_grey").hide();
  $(".abeige").hide();
  $(".agrey").hide();
  $(".anegro").hide();
  $(".aoyster").hide();
  $(".astonebeige").hide();
  $(".astonebeige").hide();
  $(".stonebeige54").hide();
  $(".negro54").hide();
  $(".oyster54").hide();
  $(".stonebeige80").hide();
  $(".negro80").hide();
  $(".grey80").hide();
  $(".oyster80").hide();
  $(".split").hide();
  $(".tinted").hide();
  allSeatsOff();
}
// dejar todas los colores en off
function allColorsOff() {
  $(".negro").hide();
  $(".rojo").hide();
  $(".blanco").hide();
  $(".inf_red").hide();
  $(".azul_electric").hide();
  $(".almond").hide();
  $(".charcoal").hide();
  $(".platinum").hide();
  $(".ocean_grey").hide();
}
// quita todos los asientos 
function allSeatsOff(){
 $(".asientonegro").hide();
 $(".asientooyster").hide();
 $(".asientostonebeige").hide();
 $(".premiumgrey").hide();
 $(".premiummushroom").hide();
 $(".premiumnegro").hide();
}
function resetFlags() {
  document.getElementById("asientos_extra").value = true;
  document.getElementById("rines").value = true;
  document.getElementById("sonido").value = true;
  document.getElementById("hielera_izq").value = true;
  document.getElementById("hielera_der").value = true;
  document.getElementById("leds").value = true;
  document.getElementById("turn_signal").value = true;
  document.getElementById("guantes_conductor").value = true;
  document.getElementById("guantes_pasajero").value = true;
  document.getElementById("guantes_ambos").value = true;
  document.getElementById("top_80").value = true;
  document.getElementById("top_54").value = true;
  document.getElementById("split").value = true;
  document.getElementById("tinted").value = true;
  document.getElementById("negro").value = true;
  document.getElementById("rojo").value = true;
  document.getElementById("blanco").value = true;
  document.getElementById("inf_red").value = true;
  document.getElementById("azul_electric").value = true;
  document.getElementById("almond").value = true;
  document.getElementById("charcoal").value = true;
  document.getElementById("platinum").value = true;
  document.getElementById("ocean_grey").value = true;
  document.getElementById("abeige").value = true;
  document.getElementById("agrey").value = true;
  document.getElementById("anegro").value = true;
  document.getElementById("aoyster").value = true;
  document.getElementById("astonebeige").value = true;
  document.getElementById("stonebeige54").value = true;
  document.getElementById("negro54").value = true;
  document.getElementById("oyster54").value = true;
  document.getElementById("stonebeige80").value = true;
  document.getElementById("negro80").value = true;
  document.getElementById("grey80").value = true;
  document.getElementById("oyster80").value = true;
  document.getElementById("cent").value = true;
  document.getElementById("ent").value = true;


}

function resetTable() {
  document.getElementById("c_t").innerHTML = "";
  document.getElementById("ae_t").innerHTML = "";
  document.getElementById("r_t").innerHTML = "";
  document.getElementById("hi_t").innerHTML = "";
  document.getElementById("hd_t").innerHTML = "";
  document.getElementById("s_t").innerHTML = "";
  document.getElementById("w_t").innerHTML = "";
  document.getElementById("led_t").innerHTML = "";
  document.getElementById("ts_t").innerHTML = "";
  document.getElementById("gb_t").innerHTML = "";
  document.getElementById("tp_t").innerHTML = "";
  document.getElementById("tpc_t").innerHTML = "";
  document.getElementById("c_t_rxv").innerHTML = "";
  document.getElementById("ae_t_rxv").innerHTML = "";
  document.getElementById("r_t_rxv").innerHTML = "";
  document.getElementById("hi_t_rxv").innerHTML = "";
  document.getElementById("hd_t_rxv").innerHTML = "";
  document.getElementById("s_t_rxv").innerHTML = "";
}

// oculta todos los tops 
function allTopsOff() {
  $(".stonebeige80").hide();
  $(".negro80").hide();
  $(".grey80").hide();
  $(".oyster80").hide();
  $(".stonebeige54").hide();
  $(".negro54").hide();
  $(".oyster54").hide();

  document.getElementById("stonebeige80").value = true;
  document.getElementById("negro80").value = true;
  document.getElementById("grey80").value = true;
  document.getElementById("oyster80").value = true;
  document.getElementById("stonebeige54").value = true;
  document.getElementById("negro54").value = true;
  document.getElementById("oyster54").value = true;
}

// oculta todos los asiento
function allAsientosOff() {
  $(".abeige").hide();
  $(".agrey").hide();
  $(".anegro").hide();
  $(".aoyster").hide();
  $(".astonebeige").hide();
}
//oculta los windshield
function allWindshieldOff() {
  $(".split").hide();
  $(".tinted").hide();
}

// checa que primero se escoja un Top
function checkWindShield(nombre) {
  if (nombre == "WindShield Tinted") {
    if (document.getElementById("top_80").value == "true" && document.getElementById("top_54").value == "true") {
      alert("Seleccione primero un Top");
      document.getElementById("tinted").value = true;
      llenarTabla("w_t", "");
      $(".tinted").hide();
      return 1;
    } else {
      $(".tinted").show();
      return 0;
    }
  } else if (nombre == "WindShield Split") {
    if (document.getElementById("top_80").value == "true" && document.getElementById("top_54").value == "true") {
      alert("Seleccione primero un Top");
      document.getElementById("split").value = true;
      llenarTabla("w_t", "");
      $(".split").hide();
      return 1;
    } else {
      $(".split").show();
      return 0;
    }
  } else {
    return 0;
  }
}

//Checa no elegir doble WindShield o doble top
function noDoubleItem(item) {
  //alert(document.getElementById(id_ex).value);
  var msg = "Cancele primero el ";
  if (item == "WindShield Split") {
    if (document.getElementById("tinted").value == "false") {
      msg = msg + "WindShield Tinted";
      alert(msg);
      return 1;
    }
  }
  if (item == "WindShield Tinted") {
    if (document.getElementById("split").value == "false") {
      msg = msg + "WindShield Split";
      alert(msg);
      return 1;
    }
  }
  if (item == "Top80in") {
    if (document.getElementById("top_54").value == "false") {
      msg = msg + "Top 54in";
      alert(msg);
      return 1;
    }
  }
  if (item == "Top54in") {
    if (document.getElementById("top_80").value == "false") {
      msg = msg + "Top 80in";
      alert(msg);
      return 1;
    }
  }
  return 0;
}