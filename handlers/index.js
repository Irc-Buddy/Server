const handleGenericMessage = require('./generic_message/')
const handleHeartbeat = require('./heartbeat/')
const handleJoin = require('./join_irc_channel/')
const handleIrcMessage = require('./irc_message/')
const handleIrcPM = require('./irc_pm/')

module.exports = {
    handleGenericMessage,
    handleHeartbeat,
    handleJoin,
    handleIrcMessage,
    handleIrcPM
}