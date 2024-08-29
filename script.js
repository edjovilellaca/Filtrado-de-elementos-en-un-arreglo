const numeroTexto = document.getElementById('paraElUser');

const boton = document.getElementById('boton');
boton.addEventListener("click", () => numeros.forEach((numero) =>{
    const numeroDentro = numeroTexto.value;
    if(numero > numeroDentro){
        console.log("El número " + numero + " es mayor que " + numeroDentro);
    }
}));