const valorTicket= 200;

var descuentoEstudiante=80;
var descuentoTrainee=50;
var descuentoJunior=15;

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");


let totalValorTicket= 0 ;

function calcular_valor_ticket () {
    var categoria = document.getElementById("categoria");
    if(categoria.value==0){
        totalValorTicket=200;
    }
    if(categoria.value==1){
        totalValorTicket= 200 -(descuentoEstudiante * 200 / 100)
    }
    if(categoria.value==2){
        totalValorTicket= 200 -(descuentoTrainee *200 / 100)
    }
    if(categoria.value==3){
        totalValorTicket= 200 -(descuentoJunior *200 / 100)
    }
}

function calcularResumen() {
    calcular_valor_ticket()
    var total_pagar = document.getElementById("total_pagar");
    var cantidad = document.getElementById("cantidad");
    total_pagar.innerHTML=totalValorTicket * cantidad.value;
}
function reset(){
    totalValorTicket=0;
    var nombre = document.getElementById("nombre");
    nombre.value= ""
    var apellido = document.getElementById("apellido");
    var correo = document.getElementById("correo");
}

