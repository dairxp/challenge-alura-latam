// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Mostrar la lista de amigos actualizada
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}
function mostrarResultado(amigoSeleccionado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
    resultado.appendChild(li);
}
