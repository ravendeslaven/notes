//
//for(let i = 0; i < 5; i++) {
//    alert('Hello madafaka')
//}

/*
let array = []

array[0] = Date.now

console.log(array[0])

document.getElementById('time').innerHTML = array[0]

let users = ['Jhon', 'Juan', 'Sebas']

for(let i = 0; i < users.length; i++) {
    console.log(`Usuario: ${users[i]}`)
}

let names = ['Alberto', 'Antonio', 'Michael']

for(let i = names.length -1; i > 0; i--) {
    console.log(names[i])

}
*/


let userDia = document.getElementById('userDia').value
let bottonSend = document.getElementById('send')
//let respuesta = document.getElementById('respuesta')
bottonSend.addEventListener('click', 'hola')




// Obtener datos del usuario para manipularlos con la funcion de mostrar tareas
function obtenerDatosUsuario() {

}



// Función para mostrar tareas del usuario
/*
function tareasDia(userDia) {
    switch(userDia) {
        case 'lunes':
            userDia = 'lunes'
            respuesta.innerHTML = `Hola Usuario, el día de hoy es ${userDia}`
            tareas = [
                'Trabajar',
                'Estudiar',
                'Fumar',
                'Dormir'
            ]
            for(let i = 0; i < tareas.length; i++) {
                console.log(tareas[i] + '')
            }
        break;
        case 'martes':
            userDia = 'Martes'
            console.log(`Hola usuario, el día de hoy es ${userDia}`)
            tareas = [
                'Estudiar',
                'Comer',
                'Leer',
                'Coger',
                'Dormir'
            ]
            for(let i = 0; i < tareas.length; i++) {
                console.log(tareas[i] + '')
            }
            break;
        default:
            console.log('Ingresa un día entre lunes y viernes(Solo habiles Lunes y Martes xd)')
    }
}
*/