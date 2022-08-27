function cambiar_nombre(boton_login){
    if (boton_login.innerHTML=="logout"){
        boton_login.innerHTML="Login";
    }else{
        boton_login.innerHTML="logout";
    }
}
function aumentar_likes(){
    if(x<=100){
    document.getElementById("tton").innerHTML=x+" likes";
    x=x+1;
    }
    alert("Ninja was Liked");
}
var x=14;


function borrar_boton(add){
    add.style.display="none";
}