/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */
//WIP Help!
function sumarTopColor(cantidad, input) {
  var msg = "Total $";
  var moneda = " usd";

  valor = input.value;
  //alert(valor+" id tabla: "+id_tabla);
  if (valor == "true") {
    input.value = false;
    stotal = stotal + costo;
  } else {
    input.value = true;
    stotal = stotal - costo;
  }
  document.getElementById("total").innerHTML = msg + stotal + moneda;
  document.getElementById("total_t").innerHTML = msg + stotal + moneda;

}
function calcular(costo, nombre, input, id_tabla) {// este sera un problema 
  //alert(valor+" id tabla: "+id_tabla+" input "+input);
  if (noDoubleItem(nombre) != 1) {
    if (checkWindShield(nombre) != 1) {
      var msg = "Total $";
      var moneda = " usd";
      valor = input.value;
      if (valor == "false") {
        var respuesta = confirm("Cancelar " + nombre + "?");
        if (respuesta) {
          input.value = true;
          stotal = stotal - costo;
          // cancela el costo en la tabla 
          document.getElementById(id_tabla).innerHTML = "";
          // aqui resetear las imagenes
        }
      } else {
        input.value = false;
        stotal = stotal + costo;
      }
      document.getElementById("total").innerHTML = msg + stotal + moneda;
      document.getElementById("total_t").innerHTML = msg + stotal + moneda;

    }
  }
}

// activar o desactivar la imagen de clase
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
// se podria eliminar...
function llenarTablaColor(color) {
  alert(color);
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
  document.getElementById("wind_split").value = true;
  document.getElementById("wind_tinted").value = true;
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
  document.getElementById("split").value = true;
  document.getElementById("tinted").value = true;
  document.getElementById("cent").value = true;
  document.getElementById("ent").value = true;
}

function resetTable(){
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
}

// checa que primero se escoja un Top
function checkWindShield(nombre) {
  if (nombre == "WindShield Tinted" || nombre == "WindShield Split") {
    if (document.getElementById("top_80").value == "true" && document.getElementById("top_54").value == "true") {
      alert("Seleccione primero un Top");
      // no cambiar el top 
      document.getElementById("split").value = true;
      document.getElementById("tinted").value = true;
      llenarTabla("w_t", "");
      $(".split").hide();
      $(".tinted").hide();
      return 1;
    }
    return 0;
  }
  return 0;
}

//Checa no elegir doble WindShield o doble top
function noDoubleItem(item) {
  //alert(document.getElementById(id_ex).value);
  var msg = "Cancele primero el ";
  if (item == "WindShield Split") {
    if (document.getElementById("wind_tinted").value == "false") {
      msg = msg + "WindShield Tinted";
      alert(msg);
      return 1;
    }
  }
  if (item == "WindShield Tinted") {
    if (document.getElementById("wind_split").value == "false") {
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
