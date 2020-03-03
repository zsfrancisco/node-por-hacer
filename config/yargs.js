const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción por la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Estado completado o pendiente la tarea por hacer'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}