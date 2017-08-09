// All websocket actions
/*
    List all types in the file as well as the default dispatch function
*/
const {
    handleGenericMessage,
    handleHeartbeat
} = require('../handlers/')

const GENERIC_MESSAGE = 'GENERIC_MESSAGE'
const HEARTBEAT = 'HEARTBEAT'

const dispatch = (action, ws) => {
    switch(action.type) {
        case GENERIC_MESSAGE:
            return handleGenericMessage(action.message, ws)
        case HEARTBEAT:
            return handleHeartbeat(ws)
        default:
            return
    }
}

module.exports = { dispatch }
