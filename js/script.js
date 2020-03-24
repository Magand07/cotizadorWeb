/***
 * Creado por: ISC Gutierrez Mendoza Jennifer Stacie
 * mail. magand07@gmail.com
 * tel. 5547631372
 */
function calcular(costo,nombre,input,id_tabla){
    $.ajax({
      type: "GET",
      url: 'test.html',
      data: "id=total_cost",
      success: function (data) {            
        var msg = "Total $";
        var moneda = " usd";

        valor = input.value;
        //alert(valor+" id tabla: "+id_tabla);
        if (valor == "false") {
          var respuesta = confirm("Cancelar "+nombre+"?");
          if (respuesta) {
            input.value = true;
            stotal = stotal - costo;
            // cancela el costo en la tabla 
            document.getElementById(id_tabla).innerHTML = "-";
          }
        } else {
          input.value = false;
          stotal = stotal + costo;
        }
        document.getElementById("total").innerHTML = msg+stotal+moneda;
        document.getElementById("total_t").innerHTML = msg+stotal+moneda;
      }
    });
  }

function cambiar(clase,input){
  alert(clase);
  var bandera = input.value;
  if(bandera == "false"){
    $("."+clase).hide();
    input.value = true;
  }else{
    input.value = false;
    $("."+clase).show();
  }
}

// from bootstrap
function cambiarFoto(num){
    $('.carousel').carousel(num);
    $('.carousel').carousel('pause');     
}

function llenarTabla(posicion,valor){
    document.getElementById(posicion).innerHTML = valor;
}
// se podria eliminar...
function llenarTablaColor(color){
    document.getElementById('c_t').innerHTML = color;
}
// borra el contenido de la pagina recargandola
function borrarCot(){
    location.reload();    
}
// oculta todas las imagenes de inicio
function firstLoad(){
  $(".negro").show();
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
}
// all off
function allOff(){
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
}