// Edades que se muestran inicialmente en el arreglo izquierdo.
let arregloIzquierdo = [12, 15];

// Edades que se muestran inicialmente en el arreglo derecho.
let arregloDerecho = [20, 25];

function agregarEdad() {
    let valorIngresado = document.getElementById("edad").value;

    if (valorIngresado === "") {
        alert("Ingrese una edad.");
        return;
    }

    let edad = parseInt(valorIngresado, 10);
    arregloIzquierdo.push(edad);

    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let filas = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        filas += "<tr>";
        filas += "<td>" + arregloIzquierdo[i] + "</td>";
        filas += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';        
        filas += '<td><button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">➜</button></td>';
        filas += "</tr>";
    }

    document.getElementById("tablaIzquierda").innerHTML = filas;
}

//pintarArregloIzquierda();

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function moverHaciaDerecha(indice) {
    let edad = arregloIzquierdo[indice];

    arregloDerecho.push(edad);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
    let edad = arregloDerecho[indice];

    arregloIzquierdo.push(edad);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function pintarArregloDerecha() {
    let filas = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        filas += "<tr>";
        filas += '<td><button class="btn-mover" onclick="moverHaciaIzquierda(' + i + ')">⬅</button></td>';        
        filas += "<td>" + arregloDerecho[i] + "</td>";
        filas += '<td><button class="btn-eliminar" onclick="eliminarDerecho(' + i + ')">Eliminar</button></td>';
        filas += "</tr>";
    }

    document.getElementById("tablaDerecha").innerHTML = filas;
}

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

// Muestra los datos iniciales al cargar la página.
pintarArregloIzquierda();
pintarArregloDerecha();
