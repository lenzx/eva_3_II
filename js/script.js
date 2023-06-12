function music() {
    sonido = document.createElement("audio");
    sonido.src = '../sound/Chayanne - Torero.mp3';
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
}
function cargar1(){
    var nros = [];
    for (let i = 0; i < 150; i++) {
        nros[i] = i+1;
        
    }
    cargarOptions0("edad",nros);
}

function cargarOptions0(objDOM,nros){
    var select = document.getElementsByName(objDOM)[0];
    for (value in nros) {
        var opti = document.createElement("option");
        opti.text = nros[value];
        opti.value = nros[value];
        select.add(opti);
    }
}

function verificarDatos() {
    let arreglo = []
    const obj = {
    }
    const nombre = document.querySelector('#nombre').value;
    obj['nombre'] = nombre
    const apellido = document.querySelector('#apellido').value;
    obj['apellido'] = apellido
    const sexo = recuperarSexo();
    obj['sexo'] = sexo
    const edad = document.querySelector('#age').value;
    obj['edad'] = edad

    for (let i of Object.keys(obj)){
        if (obj[i] == '') {
            arreglo.push(i)
        }
    }

    if (arreglo.length != 0){
        alert(`los datos ${arreglo} no han sido ingresados`)
    } else {
        alert(`Usuario agregado`)
    }

}

function recuperarSexo(){
    var opciones = document.getElementsByName("sexo");
    for (let i = 0; i < opciones.length; i++) {
        if(opciones[i].checked){
            return opciones[i].value
        }        
    }
}

function verificarTexto(){
    let contador = 0
    const texto = document.querySelector('#exampleFormControlTextarea1').value.split('')
    for (let values of texto){
        let number = Number(values)
        if(isNaN(number) == false){
            contador+=1
        }  
    }
    if (contador > 10) {
        alert(`la caja de texto posee mas de 10 caracteres numericos`)
    } else {
        alert('la caja de texto posee menos a lo mas 10 caracteres numericos')
    }
}

function realizarCambios(){
    const contenedor = document.querySelector('#img')
    const imagen = document.querySelector('#img2')
    let obj = {
        tamaño : '',
        color : '',
        imagen : '',
    }
    for (let k of Object.keys(obj)){
        obj[k] = document.getElementById(k).value
    }
    cargarSonido(obj['imagen'])
    console.log(obj['imagen'])
    obj['visible'] = recuperarTipo()
    contenedor.style.background = obj['color']
    imagen.style.visibility = obj['visible']
    imagen.style.width = obj['tamaño']
    imagen.setAttribute('src',`../img/${obj['imagen']}`)
}

function recuperarTipo(){
    var opciones = document.getElementsByName("visible");
    for (let i = 0; i < opciones.length; i++) {
        if(opciones[i].checked){
            return opciones[i].value
        }        
    }
}
function cargarSonido(imagen){
    if (imagen == 'emperador.png' && recuperarTipo() == 'visible') {
        sonido.play()
        sonido.volume = 0.08
    } else {
        sonido.pause()
    }
}