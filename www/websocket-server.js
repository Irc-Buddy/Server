const WebSocketServer = require('uws').Server
const wss = new WebSocketServer({ port: 5000 })

module.exports = wss