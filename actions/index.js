// All websocket actions
/*
    List all types in the file as well as the default dispatch function
*/
const {
    handleGenericMessage,
    handleHeartbeat,
    handleJoin,
    handleIrcMessage,
    handleIrcPM
} = require('../handlers/')

const { actionType } = require('../constants/')

/**
 * @description Fires handler function based on action type
 * @param action Object Takes an action type, and payload
 * @returns function call
 */
const dispatch = (action, ws) => {
    switch(action.type) {
        case actionType.GENERIC_MESSAGE:
            return handleGenericMessage(action.message, ws)
        case actionType.HEARTBEAT:
            return handleHeartbeat(ws)
        case actionType.JOIN_IRC_CHANNEL:
            return handleJoin(action.data, ws)
        case actionType.IRC_MESSAGE_RECEIVED:
            return handleIrcMessage(action.data, ws)
        case actionType.IRC_PM_RECEIVED:
            return handleIrcPM(action.data, ws)
        default:
            return
    }
}

module.exports = { dispatch }
