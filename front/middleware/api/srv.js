// const app = require('express')()
// const socket = require('socket.io')
// let server = null
// let io = null
//
// app.all('/init', (req, res) => {
//   if (!server) {
//     server = res.connection.server
//     io = socket(server)
//
//     io.on('connection', function (socket) {
//       console.log('Made socket connection');
//
//       socket.on('msg', msg => {
//         console.log('Recived: ' + msg)
//
//         setTimeout(() => {
//           socket.emit('msg', `Response to: ${msg}`)
//         }, 1000)
//       })
//
//       socket.on('disconnect', () => console.log('disconnected'))
//     })
//   }
//
//   res.json({ msg: 'server is set' })
// })
//
// module.exports = app
