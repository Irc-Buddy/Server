const { wss } = require('../../www/')
const { dispatch } = require('../../actions/')

module.exports = () => {
    wss.on('connection', ws => {
        function handleMessage(message) {
            dispatch(
                JSON.parse(message),
                ws
            )
        }
        ws.on('message', handleMessage)
    })
}
