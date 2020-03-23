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