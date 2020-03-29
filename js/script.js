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
// Top54in Top80in wind_split
  var msg = "Total $";
  var moneda = " usd";

  valor = input.value;
  //alert(valor+" id tabla: "+id_tabla+" input "+input);
  if(nombre == "WindShield Tinted" || nombre == "WindShield Split"){
    //alert(nombre+"\n"+document.getElementById("top_80").value+"\n"+document.getElementById("top_54").value);
    if(document.getElementById("top_80").value == "true" && document.getElementById("top_54").value == "true"){
      alert("Seleccione primero un Top");
      // no cambiar el top 
      document.getElementById("split").value = true;
      document.getElementById("tinted").value = true;
      llenarTabla("w_t","");
      $(".split").hide();
      $(".tinted").hide();
    }
  }else{
    if (valor == "false") {
      var respuesta = confirm("Cancelar " + nombre + "?");
      if (respuesta) {
        input.value = true;
        stotal = stotal - costo;
        // cancela el costo en la tabla 
        document.getElementById(id_tabla).innerHTML = "";
      }
    } else {
      input.value = false;
      stotal = stotal + costo;
    }  
  } 
  document.getElementById("total").innerHTML = msg + stotal + moneda;
  document.getElementById("total_t").innerHTML = msg + stotal + moneda;
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
function resetFlags(){
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
}
