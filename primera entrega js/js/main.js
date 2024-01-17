let varCondicional;
let varCiclica;
let contadorNombreUsuario;
let varUsuario;
let contadorClick = 0;
var pNombreUsuario = document.getElementById("pNombreUsuario");
validarNombreUsuario();
generarPrimeraLetraUp();
generarMensajeBienvenida();

function validarNombreUsuario(){
    let i = 0;
    let j = 3;
    while(i < 3){
        varUsuario = prompt("Hola! Escribe tu nombre aqui :D que quedan "+ j + " intentos");
        if(varUsuario === null || varUsuario === "" || varUsuario === "anonimo"){
            varUsuario = "anonimo";
        }else{
            break;
        }
        i++;
        j--;
    }
}

function generarMensajeBienvenida(){
    if(varUsuario === "Anonimo"){
        varCondicional = "Bienvenido! tu usuario quedo como: " + varUsuario;
    }else{
        varCondicional = "Hola "+varUsuario+"! ,Bienvenido!"
    }
}

function generarPrimeraLetraUp(){
    for(let i = 0; i < varUsuario.length; i++){
        if(i === 0){
            varCiclica = varUsuario.charAt(i).toUpperCase();
        } else{
            varCiclica = varCiclica + varUsuario.charAt(i);
        }
    }
    varUsuario = varCiclica;
}
alert(varCondicional);
pNombreUsuario.innerText = "Usuario: "+ varUsuario;